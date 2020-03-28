--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-03-29 00:45:24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2852 (class 1262 OID 16393)
-- Name: lab2; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE lab2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';


ALTER DATABASE lab2 OWNER TO postgres;

\connect lab2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16394)
-- Name: application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.application (
    id integer NOT NULL,
    client_id integer NOT NULL,
    date date NOT NULL
);


ALTER TABLE public.application OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16430)
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.application ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.application_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 204 (class 1259 OID 16404)
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    phone character varying(15) NOT NULL
);


ALTER TABLE public.client OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16432)
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.client ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 16399)
-- Name: service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    price real NOT NULL
);


ALTER TABLE public.service OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16434)
-- Name: service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 16409)
-- Name: services_for_application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services_for_application (
    id_application integer NOT NULL,
    id_service integer NOT NULL
);


ALTER TABLE public.services_for_application OWNER TO postgres;

--
-- TOC entry 2840 (class 0 OID 16394)
-- Dependencies: 202
-- Data for Name: application; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.application (id, client_id, date) OVERRIDING SYSTEM VALUE VALUES (1, 1, '2020-03-25');
INSERT INTO public.application (id, client_id, date) OVERRIDING SYSTEM VALUE VALUES (2, 2, '2020-03-25');
INSERT INTO public.application (id, client_id, date) OVERRIDING SYSTEM VALUE VALUES (25, 8, '2020-03-28');


--
-- TOC entry 2842 (class 0 OID 16404)
-- Dependencies: 204
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.client (id, name, phone) OVERRIDING SYSTEM VALUE VALUES (2, 'Максим Максимович Максимов', '89324888157');
INSERT INTO public.client (id, name, phone) OVERRIDING SYSTEM VALUE VALUES (3, 'Петров Петя Петрович', '89324888156');
INSERT INTO public.client (id, name, phone) OVERRIDING SYSTEM VALUE VALUES (1, 'Иванов Иван Иванович', '89324888151');
INSERT INTO public.client (id, name, phone) OVERRIDING SYSTEM VALUE VALUES (8, 'Тимуров Тимур Тимурович', '89324888199');
INSERT INTO public.client (id, name, phone) OVERRIDING SYSTEM VALUE VALUES (9, 'Александров Александр Александрович', '89324888111');


--
-- TOC entry 2841 (class 0 OID 16399)
-- Dependencies: 203
-- Data for Name: service; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.service (id, name, price) OVERRIDING SYSTEM VALUE VALUES (2, 'Подписаться в инсте', 2000);
INSERT INTO public.service (id, name, price) OVERRIDING SYSTEM VALUE VALUES (3, 'Подумать', 100);
INSERT INTO public.service (id, name, price) OVERRIDING SYSTEM VALUE VALUES (4, 'Сходить за вас в магазин', 300);
INSERT INTO public.service (id, name, price) OVERRIDING SYSTEM VALUE VALUES (5, 'Помыть вашу посуду', 800);
INSERT INTO public.service (id, name, price) OVERRIDING SYSTEM VALUE VALUES (1, 'Лайкнуть авку', 1800);


--
-- TOC entry 2843 (class 0 OID 16409)
-- Dependencies: 205
-- Data for Name: services_for_application; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.services_for_application (id_application, id_service) VALUES (1, 1);
INSERT INTO public.services_for_application (id_application, id_service) VALUES (1, 2);
INSERT INTO public.services_for_application (id_application, id_service) VALUES (2, 3);
INSERT INTO public.services_for_application (id_application, id_service) VALUES (2, 1);
INSERT INTO public.services_for_application (id_application, id_service) VALUES (2, 4);
INSERT INTO public.services_for_application (id_application, id_service) VALUES (1, 3);
INSERT INTO public.services_for_application (id_application, id_service) VALUES (25, 3);


--
-- TOC entry 2853 (class 0 OID 0)
-- Dependencies: 206
-- Name: application_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.application_id_seq', 25, true);


--
-- TOC entry 2854 (class 0 OID 0)
-- Dependencies: 207
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_seq', 15, true);


--
-- TOC entry 2855 (class 0 OID 0)
-- Dependencies: 208
-- Name: service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_id_seq', 6, true);


--
-- TOC entry 2704 (class 2606 OID 16398)
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);


--
-- TOC entry 2708 (class 2606 OID 16408)
-- Name: client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- TOC entry 2706 (class 2606 OID 16403)
-- Name: service service_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);


--
-- TOC entry 2710 (class 2606 OID 16413)
-- Name: services_for_application services_for_application_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_for_application
    ADD CONSTRAINT services_for_application_pkey PRIMARY KEY (id_application, id_service);


--
-- TOC entry 2712 (class 2606 OID 16420)
-- Name: services_for_application application_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_for_application
    ADD CONSTRAINT application_id FOREIGN KEY (id_application) REFERENCES public.application(id) NOT VALID;


--
-- TOC entry 2711 (class 2606 OID 16415)
-- Name: application client_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT client_id FOREIGN KEY (client_id) REFERENCES public.client(id) NOT VALID;


--
-- TOC entry 2713 (class 2606 OID 24576)
-- Name: services_for_application service_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_for_application
    ADD CONSTRAINT service_id FOREIGN KEY (id_service) REFERENCES public.service(id) NOT VALID;


-- Completed on 2020-03-29 00:45:25

--
-- PostgreSQL database dump complete
--

