CREATE DATABASE lab2
    WITH 
    OWNER = postgres
ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


CREATE TABLE public.application
(
    id integer NOT NULL,
    client_id integer NOT NULL,
    date date NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.application
    OWNER  postgres;

CREATE TABLE public.service
(
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    price real NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.service
    OWNER to postgres;

CREATE TABLE public.client
(
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    phone character varying(15) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.client
    OWNER to postgres;

CREATE TABLE public.services_for_application
(
    id_application integer NOT NULL,
    id_service integer NOT NULL,
    CONSTRAINT services_for_application_pkey PRIMARY KEY (id_application, id_service),
    CONSTRAINT application_id FOREIGN KEY (id_application)
        REFERENCES public.application (id)
    MATCH SIMPLE
        ON
    UPDATE NO ACTION
        ON
    DELETE NO ACTION
        NOT VALID,
    CONSTRAINT service_id
    FOREIGN KEY
    (id_application)
        REFERENCES public.service
    (id) MATCH SIMPLE
        ON
    UPDATE NO ACTION
        ON
    DELETE NO ACTION
        NOT VALID
    )

    ALTER TABLE public.services_for_application
    OWNER to postgres;

    ALTER TABLE public.services_for_application
    OWNER to postgres;

    ALTER TABLE public.application
    ADD CONSTRAINT client_id FOREIGN KEY (client_id)
    REFERENCES public.client (id)
    MATCH SIMPLE
    ON
    UPDATE NO ACTION
    ON
    DELETE NO ACTION
    NOT VALID;

    ALTER TABLE public.application
    ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
    ( INCREMENT 1 MINVALUE 1);

    ALTER TABLE public.client
    ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
    ( INCREMENT 1 MINVALUE 1 );

    ALTER TABLE public.service
    ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY
    ( INCREMENT 1 MINVALUE 1 );

    INSERT INTO service
        (name, price)
    VALUES
        ('Лайкнуть аву', '1500');
    INSERT INTO service
        (name, price)
    VALUES
        ('Подписаться в инсте', '2000');
    INSERT INTO service
        (name, price)
    VALUES
        ('Подумать', '100');
    INSERT INTO service
        (name, price)
    VALUES
        ('Сходить за вас в магазин', '300');
    INSERT INTO service
        (name, price)
    VALUES
        ('Помыть вашу посуду', '800');

    INSERT INTO client
        (name, phone)
    VALUES
        ('Иванов Иван Иванович', '89324888158');
    INSERT INTO client
        (name, phone)
    VALUES
        ('Максим Максимович Максимов', '89324888157');

    INSERT INTO application
        (client_id, date)
    VALUES
        (1, CURRENT_DATE);
    INSERT INTO application
        (client_id, date)
    VALUES
        (2, CURRENT_DATE);

    INSERT INTO public.services_for_application
        (
        id_application, id_service)
    VALUES
        (
            '1'
    ::integer, '1'::integer)
 returning id_application,id_service;
    INSERT INTO public.services_for_application
        (
        id_application, id_service)
    VALUES
        (
            '1'
    ::integer, '2'::integer)
 returning id_application,id_service;
    INSERT INTO public.services_for_application
        (
        id_application, id_service)
    VALUES
        (
            '2'
    ::integer, '3'::integer)
 returning id_application,id_service;
    INSERT INTO public.services_for_application
        (
        id_application, id_service)
    VALUES
        (
            '2'
    ::integer, '1'::integer)
 returning id_application,id_service;
    INSERT INTO public.services_for_application
        (
        id_application, id_service)
    VALUES
        (
            '2'
    ::integer, '4'::integer)
 returning id_application,id_service;
