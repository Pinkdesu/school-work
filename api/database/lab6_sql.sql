--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-05-15 06:46:20

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
-- TOC entry 2847 (class 1262 OID 24581)
-- Name: lab6; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE lab6 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';


ALTER DATABASE lab6 OWNER TO postgres;

\connect lab6

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
-- TOC entry 207 (class 1259 OID 24670)
-- Name: answer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answer (
    id integer NOT NULL,
    value character varying(2000) NOT NULL,
    is_correct boolean NOT NULL,
    id_question integer NOT NULL
);


ALTER TABLE public.answer OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 24668)
-- Name: answer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.answer ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.answer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 24655)
-- Name: question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question (
    id integer NOT NULL,
    value character varying(2000) NOT NULL,
    id_text integer NOT NULL
);


ALTER TABLE public.question OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 24653)
-- Name: question_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.question ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.question_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 24635)
-- Name: text; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.text (
    id integer NOT NULL,
    name character varying(2000) NOT NULL
);


ALTER TABLE public.text OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 24633)
-- Name: text_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.text ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.text_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2841 (class 0 OID 24670)
-- Dependencies: 207
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (65, 'В автобусе', false, 62);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (66, 'На карантине', false, 62);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (67, 'На море', true, 62);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (68, ' В пн', false, 63);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (69, 'ВО вт', false, 63);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (70, 'В вск', true, 63);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (71, 'До вечера', false, 64);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (72, 'До утра', true, 64);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (73, 'Тут', true, 65);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (74, 'Там', false, 65);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (75, 'Она', false, 66);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (77, 'Я', true, 66);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (76, 'Он ', false, 66);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (78, 'Тут', true, 67);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (79, 'Там', false, 67);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (80, 'Она', false, 68);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (81, 'Он ', false, 68);
INSERT INTO public.answer (id, value, is_correct, id_question) OVERRIDING SYSTEM VALUE VALUES (82, 'Я', true, 68);


--
-- TOC entry 2839 (class 0 OID 24655)
-- Dependencies: 205
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (62, 'Мы где?', 52);
INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (63, 'Когда отдыхаем?', 52);
INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (64, 'До каких пор отдыхаем?', 52);
INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (65, 'Где делаешь работу?', 53);
INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (66, 'Кто делает работу?', 53);
INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (67, 'Где делаешь работу?', 54);
INSERT INTO public.question (id, value, id_text) OVERRIDING SYSTEM VALUE VALUES (68, 'Кто делает работу?', 54);


--
-- TOC entry 2837 (class 0 OID 24635)
-- Dependencies: 203
-- Data for Name: text; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.text (id, name) OVERRIDING SYSTEM VALUE VALUES (52, 'Мы на море в вск, отдыхаем до утра');
INSERT INTO public.text (id, name) OVERRIDING SYSTEM VALUE VALUES (53, 'Тут я делаю работу');
INSERT INTO public.text (id, name) OVERRIDING SYSTEM VALUE VALUES (54, 'Тут я делаю работу');


--
-- TOC entry 2848 (class 0 OID 0)
-- Dependencies: 206
-- Name: answer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answer_id_seq', 82, true);


--
-- TOC entry 2849 (class 0 OID 0)
-- Dependencies: 204
-- Name: question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.question_id_seq', 68, true);


--
-- TOC entry 2850 (class 0 OID 0)
-- Dependencies: 202
-- Name: text_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.text_id_seq', 54, true);


--
-- TOC entry 2707 (class 2606 OID 24692)
-- Name: answer answer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_pkey PRIMARY KEY (id);


--
-- TOC entry 2705 (class 2606 OID 24690)
-- Name: question question_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);


--
-- TOC entry 2703 (class 2606 OID 24642)
-- Name: text text_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.text
    ADD CONSTRAINT text_pkey PRIMARY KEY (id);


--
-- TOC entry 2709 (class 2606 OID 24693)
-- Name: answer answer_id_question_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_id_question_fkey FOREIGN KEY (id_question) REFERENCES public.question(id) NOT VALID;


--
-- TOC entry 2708 (class 2606 OID 24698)
-- Name: question question_id_text_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_id_text_fkey FOREIGN KEY (id_text) REFERENCES public.text(id) NOT VALID;


-- Completed on 2020-05-15 06:46:22

--
-- PostgreSQL database dump complete
--

