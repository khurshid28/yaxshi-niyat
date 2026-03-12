--
-- PostgreSQL database dump
--

\restrict 32MNDxQnNJbx5dRITsfn6AMIuN0oexaKaqXFfMA1dxAS3E2WoNTle6pRgXWrqUx

-- Dumped from database version 16.10 (Ubuntu 16.10-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.10 (Ubuntu 16.10-0ubuntu0.24.04.1)

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
-- Name: _locales; Type: TYPE; Schema: public; Owner: yaxshiniyat
--

CREATE TYPE public._locales AS ENUM (
    'ru',
    'uz'
);


ALTER TYPE public._locales OWNER TO yaxshiniyat;

--
-- Name: enum_offices_items_region; Type: TYPE; Schema: public; Owner: yaxshiniyat
--

CREATE TYPE public.enum_offices_items_region AS ENUM (
    'tashkent',
    'tashkentRegion',
    'bukhara',
    'andijan',
    'samarkand',
    'navoiy',
    'jizzax',
    'qarshi',
    'termiz',
    'urganch',
    'karakalpakstan',
    'khorezm',
    'fergana',
    'surxondaryo',
    'sirdaryo',
    'namangan'
);


ALTER TYPE public.enum_offices_items_region OWNER TO yaxshiniyat;

--
-- Name: enum_redirects_to_type; Type: TYPE; Schema: public; Owner: yaxshiniyat
--

CREATE TYPE public.enum_redirects_to_type AS ENUM (
    'reference',
    'custom'
);


ALTER TYPE public.enum_redirects_to_type OWNER TO yaxshiniyat;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: calc; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.calc (
    id integer NOT NULL,
    bez_zaloga_annual_interest_rate numeric DEFAULT 80 NOT NULL,
    bez_zaloga_term_months numeric DEFAULT 6 NOT NULL,
    bez_zaloga_min_term_months numeric DEFAULT 6 NOT NULL,
    bez_zaloga_max_term_months numeric DEFAULT 60 NOT NULL,
    bez_zaloga_loan_amount numeric DEFAULT 10000000 NOT NULL,
    bez_zaloga_min_loan_amount numeric DEFAULT 1000000 NOT NULL,
    bez_zaloga_max_loan_amount numeric DEFAULT 100000000 NOT NULL,
    pod_zalog_annual_interest_rate numeric DEFAULT 55 NOT NULL,
    pod_zalog_annual_interest_rate_gold numeric DEFAULT 80 NOT NULL,
    pod_zalog_min_term_months numeric DEFAULT 6 NOT NULL,
    pod_zalog_max_term_months numeric DEFAULT 60 NOT NULL,
    pod_zalog_min_loan_amount numeric DEFAULT 1000000 NOT NULL,
    pod_zalog_max_loan_amount numeric DEFAULT 100000000 NOT NULL,
    avtokredit_annual_interest_rate numeric DEFAULT 54 NOT NULL,
    avtokredit_term_months numeric DEFAULT 6 NOT NULL,
    avtokredit_min_term_months numeric DEFAULT 6 NOT NULL,
    avtokredit_max_term_months numeric DEFAULT 35 NOT NULL,
    avtokredit_min_loan_amount numeric DEFAULT 1000000 NOT NULL,
    avtokredit_max_loan_amount numeric DEFAULT 100000000 NOT NULL,
    avtokredit_down_payment_percent numeric DEFAULT 20 NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone,
    pod_zalog_max_term_months_gold numeric DEFAULT 12 NOT NULL,
    pod_zalog_term_months numeric DEFAULT 6 NOT NULL,
    pod_zalog_loan_amount numeric DEFAULT 10000000 NOT NULL,
    avtokredit_loan_amount numeric DEFAULT 10000000 NOT NULL
);


ALTER TABLE public.calc OWNER TO yaxshiniyat;

--
-- Name: calc_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.calc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.calc_id_seq OWNER TO yaxshiniyat;

--
-- Name: calc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.calc_id_seq OWNED BY public.calc.id;


--
-- Name: faq; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.faq (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.faq OWNER TO yaxshiniyat;

--
-- Name: faq_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.faq_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.faq_id_seq OWNER TO yaxshiniyat;

--
-- Name: faq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.faq_id_seq OWNED BY public.faq.id;


--
-- Name: faq_items; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.faq_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL
);


ALTER TABLE public.faq_items OWNER TO yaxshiniyat;

--
-- Name: faq_items_locales; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.faq_items_locales (
    title character varying NOT NULL,
    content jsonb NOT NULL,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id character varying NOT NULL
);


ALTER TABLE public.faq_items_locales OWNER TO yaxshiniyat;

--
-- Name: faq_items_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.faq_items_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.faq_items_locales_id_seq OWNER TO yaxshiniyat;

--
-- Name: faq_items_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.faq_items_locales_id_seq OWNED BY public.faq_items_locales.id;


--
-- Name: footer; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.footer (
    id integer NOT NULL,
    telegram character varying,
    facebook character varying,
    instagram character varying,
    email character varying DEFAULT 'Support@yniyat.uz'::character varying,
    phone character varying DEFAULT '998 (90) 900-90-90'::character varying,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.footer OWNER TO yaxshiniyat;

--
-- Name: footer_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.footer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footer_id_seq OWNER TO yaxshiniyat;

--
-- Name: footer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.footer_id_seq OWNED BY public.footer.id;


--
-- Name: footer_locales; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.footer_locales (
    address character varying DEFAULT 'Ташкент, 9-й тупик Сагбан, 30'::character varying NOT NULL,
    copyright character varying DEFAULT 'ООО «CASH U mikromoliya tashkiloti»'::character varying NOT NULL,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


ALTER TABLE public.footer_locales OWNER TO yaxshiniyat;

--
-- Name: footer_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.footer_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footer_locales_id_seq OWNER TO yaxshiniyat;

--
-- Name: footer_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.footer_locales_id_seq OWNED BY public.footer_locales.id;


--
-- Name: header; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.header (
    id integer NOT NULL,
    telegram character varying,
    facebook character varying,
    instagram character varying,
    phone character varying DEFAULT '998 (90) 900-90-90'::character varying,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.header OWNER TO yaxshiniyat;

--
-- Name: header_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.header_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.header_id_seq OWNER TO yaxshiniyat;

--
-- Name: header_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.header_id_seq OWNED BY public.header.id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.media (
    id integer NOT NULL,
    alt character varying,
    caption jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    url character varying,
    thumbnail_u_r_l character varying,
    filename character varying,
    mime_type character varying,
    filesize numeric,
    width numeric,
    height numeric,
    focal_x numeric,
    focal_y numeric,
    sizes_thumbnail_url character varying,
    sizes_thumbnail_width numeric,
    sizes_thumbnail_height numeric,
    sizes_thumbnail_mime_type character varying,
    sizes_thumbnail_filesize numeric,
    sizes_thumbnail_filename character varying,
    sizes_square_url character varying,
    sizes_square_width numeric,
    sizes_square_height numeric,
    sizes_square_mime_type character varying,
    sizes_square_filesize numeric,
    sizes_square_filename character varying,
    sizes_small_url character varying,
    sizes_small_width numeric,
    sizes_small_height numeric,
    sizes_small_mime_type character varying,
    sizes_small_filesize numeric,
    sizes_small_filename character varying,
    sizes_medium_url character varying,
    sizes_medium_width numeric,
    sizes_medium_height numeric,
    sizes_medium_mime_type character varying,
    sizes_medium_filesize numeric,
    sizes_medium_filename character varying,
    sizes_large_url character varying,
    sizes_large_width numeric,
    sizes_large_height numeric,
    sizes_large_mime_type character varying,
    sizes_large_filesize numeric,
    sizes_large_filename character varying,
    sizes_xlarge_url character varying,
    sizes_xlarge_width numeric,
    sizes_xlarge_height numeric,
    sizes_xlarge_mime_type character varying,
    sizes_xlarge_filesize numeric,
    sizes_xlarge_filename character varying,
    sizes_og_url character varying,
    sizes_og_width numeric,
    sizes_og_height numeric,
    sizes_og_mime_type character varying,
    sizes_og_filesize numeric,
    sizes_og_filename character varying
);


ALTER TABLE public.media OWNER TO yaxshiniyat;

--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.media_id_seq OWNER TO yaxshiniyat;

--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.media_id_seq OWNED BY public.media.id;


--
-- Name: offices; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.offices (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.offices OWNER TO yaxshiniyat;

--
-- Name: offices_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.offices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.offices_id_seq OWNER TO yaxshiniyat;

--
-- Name: offices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.offices_id_seq OWNED BY public.offices.id;


--
-- Name: offices_items; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.offices_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    region public.enum_offices_items_region DEFAULT 'tashkent'::public.enum_offices_items_region,
    media_id integer NOT NULL
);


ALTER TABLE public.offices_items OWNER TO yaxshiniyat;

--
-- Name: offices_items_locales; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.offices_items_locales (
    title character varying NOT NULL,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id character varying NOT NULL,
    address character varying NOT NULL
);


ALTER TABLE public.offices_items_locales OWNER TO yaxshiniyat;

--
-- Name: offices_items_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.offices_items_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.offices_items_locales_id_seq OWNER TO yaxshiniyat;

--
-- Name: offices_items_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.offices_items_locales_id_seq OWNED BY public.offices_items_locales.id;


--
-- Name: offices_items_phones; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.offices_items_phones (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    item character varying DEFAULT '+998 (78) 113-31-11'::character varying NOT NULL
);


ALTER TABLE public.offices_items_phones OWNER TO yaxshiniyat;

--
-- Name: offices_items_schedule; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.offices_items_schedule (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL
);


ALTER TABLE public.offices_items_schedule OWNER TO yaxshiniyat;

--
-- Name: offices_items_schedule_locales; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.offices_items_schedule_locales (
    item character varying DEFAULT 'Пн-Сб с 09:00-18:00'::character varying NOT NULL,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id character varying NOT NULL
);


ALTER TABLE public.offices_items_schedule_locales OWNER TO yaxshiniyat;

--
-- Name: offices_items_schedule_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.offices_items_schedule_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.offices_items_schedule_locales_id_seq OWNER TO yaxshiniyat;

--
-- Name: offices_items_schedule_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.offices_items_schedule_locales_id_seq OWNED BY public.offices_items_schedule_locales.id;


--
-- Name: pages; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages (
    id integer NOT NULL,
    published_at timestamp(3) with time zone,
    slug character varying,
    slug_lock boolean DEFAULT true,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    parent_id integer
);


ALTER TABLE public.pages OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_about; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_about (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_about OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_about_licenses; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_about_licenses (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_about_licenses OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_additional_docs; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_additional_docs (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_additional_docs OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_archive; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_archive (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_archive OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_call_to_action; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_call_to_action (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_call_to_action OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_employees; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_employees (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_employees OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_faq; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_faq (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    "full" boolean,
    block_name character varying
);


ALTER TABLE public.pages_blocks_faq OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_hero; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_hero (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_hero OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_licenses; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_licenses (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_licenses OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_map; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_map (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_map OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_partners; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_partners (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_partners OWNER TO yaxshiniyat;

--
-- Name: pages_blocks_products; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_blocks_products (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    block_name character varying
);


ALTER TABLE public.pages_blocks_products OWNER TO yaxshiniyat;

--
-- Name: pages_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.pages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_id_seq OWNER TO yaxshiniyat;

--
-- Name: pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.pages_id_seq OWNED BY public.pages.id;


--
-- Name: pages_locales; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.pages_locales (
    title character varying NOT NULL,
    meta_title character varying,
    meta_image_id integer,
    meta_description character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


ALTER TABLE public.pages_locales OWNER TO yaxshiniyat;

--
-- Name: pages_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.pages_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_locales_id_seq OWNER TO yaxshiniyat;

--
-- Name: pages_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.pages_locales_id_seq OWNED BY public.pages_locales.id;


--
-- Name: partners; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.partners (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.partners OWNER TO yaxshiniyat;

--
-- Name: partners_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.partners_id_seq OWNER TO yaxshiniyat;

--
-- Name: partners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.partners_id_seq OWNED BY public.partners.id;


--
-- Name: partners_items; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.partners_items (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    media_id integer NOT NULL
);


ALTER TABLE public.partners_items OWNER TO yaxshiniyat;

--
-- Name: payload_locked_documents; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.payload_locked_documents (
    id integer NOT NULL,
    global_slug character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_locked_documents OWNER TO yaxshiniyat;

--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.payload_locked_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_locked_documents_id_seq OWNER TO yaxshiniyat;

--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.payload_locked_documents_id_seq OWNED BY public.payload_locked_documents.id;


--
-- Name: payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.payload_locked_documents_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    pages_id integer,
    media_id integer,
    users_id integer,
    posts_id integer,
    redirects_id integer
);


ALTER TABLE public.payload_locked_documents_rels OWNER TO yaxshiniyat;

--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.payload_locked_documents_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNER TO yaxshiniyat;

--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNED BY public.payload_locked_documents_rels.id;


--
-- Name: payload_migrations; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.payload_migrations (
    id integer NOT NULL,
    name character varying,
    batch numeric,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_migrations OWNER TO yaxshiniyat;

--
-- Name: payload_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.payload_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_migrations_id_seq OWNER TO yaxshiniyat;

--
-- Name: payload_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.payload_migrations_id_seq OWNED BY public.payload_migrations.id;


--
-- Name: payload_preferences; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.payload_preferences (
    id integer NOT NULL,
    key character varying,
    value jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_preferences OWNER TO yaxshiniyat;

--
-- Name: payload_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.payload_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_preferences_id_seq OWNER TO yaxshiniyat;

--
-- Name: payload_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.payload_preferences_id_seq OWNED BY public.payload_preferences.id;


--
-- Name: payload_preferences_rels; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.payload_preferences_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer
);


ALTER TABLE public.payload_preferences_rels OWNER TO yaxshiniyat;

--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.payload_preferences_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNER TO yaxshiniyat;

--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNED BY public.payload_preferences_rels.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    hero_image_id integer NOT NULL,
    published_at timestamp(3) with time zone,
    slug character varying,
    slug_lock boolean DEFAULT true,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.posts OWNER TO yaxshiniyat;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_id_seq OWNER TO yaxshiniyat;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: posts_locales; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.posts_locales (
    title character varying NOT NULL,
    description character varying NOT NULL,
    content jsonb NOT NULL,
    meta_title character varying,
    meta_image_id integer,
    meta_description character varying,
    id integer NOT NULL,
    _locale public._locales NOT NULL,
    _parent_id integer NOT NULL
);


ALTER TABLE public.posts_locales OWNER TO yaxshiniyat;

--
-- Name: posts_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.posts_locales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_locales_id_seq OWNER TO yaxshiniyat;

--
-- Name: posts_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.posts_locales_id_seq OWNED BY public.posts_locales.id;


--
-- Name: redirects; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.redirects (
    id integer NOT NULL,
    "from" character varying NOT NULL,
    to_type public.enum_redirects_to_type DEFAULT 'reference'::public.enum_redirects_to_type,
    to_url character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.redirects OWNER TO yaxshiniyat;

--
-- Name: redirects_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.redirects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.redirects_id_seq OWNER TO yaxshiniyat;

--
-- Name: redirects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.redirects_id_seq OWNED BY public.redirects.id;


--
-- Name: redirects_rels; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.redirects_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    pages_id integer,
    posts_id integer
);


ALTER TABLE public.redirects_rels OWNER TO yaxshiniyat;

--
-- Name: redirects_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.redirects_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.redirects_rels_id_seq OWNER TO yaxshiniyat;

--
-- Name: redirects_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.redirects_rels_id_seq OWNED BY public.redirects_rels.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    email character varying NOT NULL,
    reset_password_token character varying,
    reset_password_expiration timestamp(3) with time zone,
    salt character varying,
    hash character varying,
    login_attempts numeric DEFAULT 0,
    lock_until timestamp(3) with time zone
);


ALTER TABLE public.users OWNER TO yaxshiniyat;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: yaxshiniyat
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO yaxshiniyat;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yaxshiniyat
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_sessions; Type: TABLE; Schema: public; Owner: yaxshiniyat
--

CREATE TABLE public.users_sessions (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    created_at timestamp(3) with time zone,
    expires_at timestamp(3) with time zone NOT NULL
);


ALTER TABLE public.users_sessions OWNER TO yaxshiniyat;

--
-- Name: calc id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.calc ALTER COLUMN id SET DEFAULT nextval('public.calc_id_seq'::regclass);


--
-- Name: faq id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq ALTER COLUMN id SET DEFAULT nextval('public.faq_id_seq'::regclass);


--
-- Name: faq_items_locales id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq_items_locales ALTER COLUMN id SET DEFAULT nextval('public.faq_items_locales_id_seq'::regclass);


--
-- Name: footer id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.footer ALTER COLUMN id SET DEFAULT nextval('public.footer_id_seq'::regclass);


--
-- Name: footer_locales id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.footer_locales ALTER COLUMN id SET DEFAULT nextval('public.footer_locales_id_seq'::regclass);


--
-- Name: header id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.header ALTER COLUMN id SET DEFAULT nextval('public.header_id_seq'::regclass);


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.media ALTER COLUMN id SET DEFAULT nextval('public.media_id_seq'::regclass);


--
-- Name: offices id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices ALTER COLUMN id SET DEFAULT nextval('public.offices_id_seq'::regclass);


--
-- Name: offices_items_locales id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_locales ALTER COLUMN id SET DEFAULT nextval('public.offices_items_locales_id_seq'::regclass);


--
-- Name: offices_items_schedule_locales id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_schedule_locales ALTER COLUMN id SET DEFAULT nextval('public.offices_items_schedule_locales_id_seq'::regclass);


--
-- Name: pages id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages ALTER COLUMN id SET DEFAULT nextval('public.pages_id_seq'::regclass);


--
-- Name: pages_locales id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_locales ALTER COLUMN id SET DEFAULT nextval('public.pages_locales_id_seq'::regclass);


--
-- Name: partners id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.partners ALTER COLUMN id SET DEFAULT nextval('public.partners_id_seq'::regclass);


--
-- Name: payload_locked_documents id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_id_seq'::regclass);


--
-- Name: payload_locked_documents_rels id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_rels_id_seq'::regclass);


--
-- Name: payload_migrations id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_migrations ALTER COLUMN id SET DEFAULT nextval('public.payload_migrations_id_seq'::regclass);


--
-- Name: payload_preferences id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_preferences ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_id_seq'::regclass);


--
-- Name: payload_preferences_rels id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_preferences_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_rels_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: posts_locales id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts_locales ALTER COLUMN id SET DEFAULT nextval('public.posts_locales_id_seq'::regclass);


--
-- Name: redirects id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects ALTER COLUMN id SET DEFAULT nextval('public.redirects_id_seq'::regclass);


--
-- Name: redirects_rels id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects_rels ALTER COLUMN id SET DEFAULT nextval('public.redirects_rels_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: calc; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.calc (id, bez_zaloga_annual_interest_rate, bez_zaloga_term_months, bez_zaloga_min_term_months, bez_zaloga_max_term_months, bez_zaloga_loan_amount, bez_zaloga_min_loan_amount, bez_zaloga_max_loan_amount, pod_zalog_annual_interest_rate, pod_zalog_annual_interest_rate_gold, pod_zalog_min_term_months, pod_zalog_max_term_months, pod_zalog_min_loan_amount, pod_zalog_max_loan_amount, avtokredit_annual_interest_rate, avtokredit_term_months, avtokredit_min_term_months, avtokredit_max_term_months, avtokredit_min_loan_amount, avtokredit_max_loan_amount, avtokredit_down_payment_percent, updated_at, created_at, pod_zalog_max_term_months_gold, pod_zalog_term_months, pod_zalog_loan_amount, avtokredit_loan_amount) FROM stdin;
1	80	6	6	12	10000000	1000000	25000000	55	80	6	48	1000000	300000000	54	6	6	35	1000000	300000000	20	2025-06-04 11:20:06.981+00	2025-06-04 07:09:57.254+00	12	6	10000000	10000000
\.


--
-- Data for Name: faq; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.faq (id, updated_at, created_at) FROM stdin;
1	2025-09-23 04:10:27.66+00	2025-05-02 09:02:07.949+00
\.


--
-- Data for Name: faq_items; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.faq_items (_order, _parent_id, id) FROM stdin;
1	1	681489817712899849a9f286
2	1	681489a77712899849a9f287
3	1	681489bd7712899849a9f288
4	1	681489c07712899849a9f289
5	1	681489cc7712899849a9f28a
6	1	681489d97712899849a9f28b
7	1	681489ed7712899849a9f28c
\.


--
-- Data for Name: faq_items_locales; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.faq_items_locales (title, content, id, _locale, _parent_id) FROM stdin;
Кто и как может получить микрокредит?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Микрокредит выдается только гражданам Республики Узбекистан, достигшим 18 лет.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Необходимо подать заявку на нашем сайте, либо через Телеграм-бот на получение микрокредита и пройти скоринг-тест.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	43	ru	681489817712899849a9f286
Kimlar mikroqarz olishi mumkin?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Mikroqarzni 18 yoshga to’lgan, O’zbekiston Respublikasining fuqarolari olishi mumkin.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Mikroqarzni olish uchun veb-saytimiz yoki Telegram-botimiz orqali ariza topshirishingiz va skoring testidan o’tishingiz kerak.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	44	uz	681489817712899849a9f286
Что такое скоринг?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Скоринг - это проверочный анализ Заемщика, на предмет наличия кредитов, дисциплины погашения имеющихся кредитов, на достаточность доходов для погашения обязательств и других факторов, влияющих на получение микрозайма, по завершению которого Заемщику присваивается скоринговый балл.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	45	ru	681489a77712899849a9f287
Skoring - bu nima?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Skoring - bu qarz oluvchining kreditlari mavjud yoki yo’qligini, mavjud kreditlarni to’lash intizomi, uning daromadi majburiyatlarni to’lash uchun yetarli yoki yo’qligini va mikroqarzni olishga ta’sir etuvchi boshqa omillar mavjud yoki mavjud emasligini tekshiruvchi tahlil bo’lib, uning natijasiga ko’ra Qarz oluvchiga skoring ballari beriladi.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	46	uz	681489a77712899849a9f287
В каком городе можно взять микрокредит?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "На сегодняшний день наша компания работает в 14 крупных городах Узбекистана. Наши филиалы: Ташкент, Андижан, Наманган, Джиззах, Фергана, Самарканд, Карши, Термез, Денау, Навои, Ургенч, Гулистан, Нукус, Бухара.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	47	ru	681489bd7712899849a9f288
Mikroqarzni qaysi shaharlarda olishim mumkin?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Bugungi kunda kompaniyamiz O‘zbekistonning 11 ta yirik shaharlarida, Toshkent, Andijon, Namangan, Fargona, Jizzax, Samarqand, Qarshi, Termiz, Denov, Navoiy, Urganchda bizning filiallarimiz mavjud.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	48	uz	681489bd7712899849a9f288
Можно ли подать заявку на микрокредит по телефону?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Вы можете позвонить нам для уточнения любых деталей по кредиту. Однако заявку рекомендуется подавать через наш бот или веб-сайт.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	49	ru	681489c07712899849a9f289
Telefon orqali mikroqarz olish uchun murojaat qilsam bo’ladimi?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Qarz bo’yicha har qanday ma’lumotni aniqlashtirish uchun bizga qo’ng’iroq qilishingiz mumkin. Bizning telegram-botimiz yoki veb-saytimiz orqali ariza topshirishingiz tavsiya etiladi.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	50	uz	681489c07712899849a9f289
Какими способами можно получить деньги?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Деньги мы выдаем либо наличными, либо переводом на вашу банковскую карту.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	51	ru	681489cc7712899849a9f28a
Mablag’ qanday usullarda olinishi mumkin?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Biz mablag’ni naqd pul shaklida yoki bank kartangizga o’tkazish yo’li orqali taqdim etamiz.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	52	uz	681489cc7712899849a9f28a
Как можно погасить кредит?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Вы можете произвести оплату онлайн через любую платёжную систему: Payme, Paynet или Click. Также можно приехать в наш офис и оплатить наличными в кассе.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Для оплаты через платёжные системы выберите поставщика ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "CASH U", "type": "text", "style": "", "detail": 0, "format": 2, "version": 1}, {"mode": "normal", "text": " и введите номер вашего кредита.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Кроме того, оплату можно произвести в любом банке.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	53	ru	681489d97712899849a9f28b
Qarzni qanday yopish mumkin?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Buni istalgan to’lov tizimidan foydalangan holda: Payme, Paynet, Click onlayn amalga oshirishingiz yoki bizning ofisimizga tashrif buyurib, kassada naqd pul shaklida to’lashingiz mumkin.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "To’lov tizimlari orqali to’lash jarayonida CASH U tizimini toping va qarz raqamingizni kiriting.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Shuningdek, siz istalgan bankda ham to’lovni amalga oshirishingiz mumkin.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	54	uz	681489d97712899849a9f28b
Можно ли оформить кредит на мое имя, а под залог оставить машину брата/ родственников?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Да, при оформлении микрозайма Залогодателем может выступать третье лицо.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	55	ru	681489ed7712899849a9f28c
Mikroqarzning qancha maksimal muddatga olish mumkin?	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "- garovsiz mikroqarz olishda uning maksimal muddati - 6 oy;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "- transport vositasi yoki ko’chmas mulk ko’rinishidagi garov bilan mikroqarz olishda uning maksimal muddat - 18 oy;", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	56	uz	681489ed7712899849a9f28c
\.


--
-- Data for Name: footer; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.footer (id, telegram, facebook, instagram, email, phone, updated_at, created_at) FROM stdin;
1	https://t.me/yaxshiniyat_uz	https://www.facebook.com/yaxshiniyat	https://www.instagram.com/yaxshiniyat_uz	info@yaxshiniyat.uz	+998 (78) 113-31-11	2025-09-22 05:44:35.547+00	2025-05-08 06:54:18.859+00
\.


--
-- Data for Name: footer_locales; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.footer_locales (address, copyright, id, _locale, _parent_id) FROM stdin;
г. Ташкент, Алмазарский район, ул. Сагбан 30 туп, д. 9	ООО «CASH U mikromoliya tashkiloti»	8	ru	1
Toshkent shahri, Olmazor tumani, ko'ch. Sagban 30, 9 uy	«CASH U mikromoliya tashkiloti» MChJ	9	uz	1
\.


--
-- Data for Name: header; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.header (id, telegram, facebook, instagram, phone, updated_at, created_at) FROM stdin;
1	https://t.me/yaxshiniyat_uz	https://www.facebook.com/yaxshiniyat	https://www.instagram.com/yaxshiniyat_uz	+998 (78) 113-31-11	2025-09-22 05:45:38.041+00	2025-05-08 06:29:26.93+00
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.media (id, alt, caption, updated_at, created_at, url, thumbnail_u_r_l, filename, mime_type, filesize, width, height, focal_x, focal_y, sizes_thumbnail_url, sizes_thumbnail_width, sizes_thumbnail_height, sizes_thumbnail_mime_type, sizes_thumbnail_filesize, sizes_thumbnail_filename, sizes_square_url, sizes_square_width, sizes_square_height, sizes_square_mime_type, sizes_square_filesize, sizes_square_filename, sizes_small_url, sizes_small_width, sizes_small_height, sizes_small_mime_type, sizes_small_filesize, sizes_small_filename, sizes_medium_url, sizes_medium_width, sizes_medium_height, sizes_medium_mime_type, sizes_medium_filesize, sizes_medium_filename, sizes_large_url, sizes_large_width, sizes_large_height, sizes_large_mime_type, sizes_large_filesize, sizes_large_filename, sizes_xlarge_url, sizes_xlarge_width, sizes_xlarge_height, sizes_xlarge_mime_type, sizes_xlarge_filesize, sizes_xlarge_filename, sizes_og_url, sizes_og_width, sizes_og_height, sizes_og_mime_type, sizes_og_filesize, sizes_og_filename) FROM stdin;
1	\N	\N	2025-05-02 09:07:18.188+00	2025-05-02 09:07:18.178+00	\N	\N	1.png	image/png	9250	252	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
2	\N	\N	2025-05-02 09:07:30.073+00	2025-05-02 09:07:30.068+00	\N	\N	2.png	image/png	10550	183	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
3	\N	\N	2025-05-02 09:07:30.112+00	2025-05-02 09:07:30.093+00	\N	\N	3.png	image/png	11355	361	72	50	50	\N	300	60	image/png	11057	3-300x60.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
4	\N	\N	2025-05-02 09:07:30.137+00	2025-05-02 09:07:30.132+00	\N	\N	4.png	image/png	7425	180	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
5	\N	\N	2025-05-02 09:07:30.162+00	2025-05-02 09:07:30.155+00	\N	\N	5.png	image/png	5104	177	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
6	\N	\N	2025-05-02 09:07:30.203+00	2025-05-02 09:07:30.184+00	\N	\N	6.png	image/png	14425	309	72	50	50	\N	300	70	image/png	16472	6-300x70.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
7	\N	\N	2025-05-02 09:07:30.226+00	2025-05-02 09:07:30.222+00	\N	\N	7.png	image/png	10312	276	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
8	\N	\N	2025-05-02 09:07:30.25+00	2025-05-02 09:07:30.245+00	\N	\N	8.png	image/png	4837	133	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
9	\N	\N	2025-05-02 09:07:30.272+00	2025-05-02 09:07:30.269+00	\N	\N	9.png	image/png	8004	248	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
10	\N	\N	2025-05-06 08:49:28.548+00	2025-05-06 08:49:28.232+00	\N	\N	1-1.png	image/png	9250	252	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
11	\N	\N	2025-05-06 08:49:35.117+00	2025-05-06 08:49:35.107+00	\N	\N	2-1.png	image/png	10550	183	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
12	\N	\N	2025-05-06 08:49:41.945+00	2025-05-06 08:49:41.877+00	\N	\N	3-1.png	image/png	11057	300	60	50	50	\N	300	60	image/png	11057	3-1-300x60.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
13	\N	\N	2025-05-06 08:49:47.604+00	2025-05-06 08:49:47.596+00	\N	\N	4-1.png	image/png	7425	180	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
14	\N	\N	2025-05-06 08:49:53.3+00	2025-05-06 08:49:53.285+00	\N	\N	5-1.png	image/png	5104	177	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
15	\N	\N	2025-05-06 08:49:59.555+00	2025-05-06 08:49:59.522+00	\N	\N	6-1.png	image/png	16472	300	70	50	50	\N	300	70	image/png	16472	6-1-300x70.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
16	\N	\N	2025-05-06 08:50:05.238+00	2025-05-06 08:50:05.226+00	\N	\N	7-1.png	image/png	10312	276	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
17	\N	\N	2025-05-06 08:50:11.058+00	2025-05-06 08:50:11.048+00	\N	\N	8-1.png	image/png	4837	133	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
18	\N	\N	2025-05-06 08:50:17.036+00	2025-05-06 08:50:17.023+00	\N	\N	9-1.png	image/png	8004	248	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
19	\N	\N	2025-05-08 07:12:50.217+00	2025-05-08 07:12:50.063+00	\N	\N	626bd2030a2f3.jpg	image/jpeg	45644	696	418	50	50	\N	300	180	image/jpeg	10126	626bd2030a2f3-300x180.jpg	\N	500	500	image/jpeg	34484	626bd2030a2f3-500x500.jpg	\N	600	360	image/jpeg	30169	626bd2030a2f3-600x360.jpg	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
20	\N	\N	2025-05-08 09:55:41.043+00	2025-05-08 09:55:40.939+00	\N	\N	Andijon.png	image/png	126722	386	248	50	50	\N	300	193	image/png	112490	Andijon-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
21	\N	\N	2025-05-08 13:22:53.873+00	2025-05-08 13:22:53.784+00	\N	\N	Buxoro.png	image/png	194920	386	248	50	50	\N	300	193	image/png	170546	Buxoro-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
22	\N	\N	2025-05-08 13:23:54.792+00	2025-05-08 13:23:54.736+00	\N	\N	Andijon-1.png	image/png	126722	386	248	50	50	\N	300	193	image/png	112490	Andijon-1-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
23	\N	\N	2025-05-08 13:24:52.225+00	2025-05-08 13:24:52.172+00	\N	\N	Samarkand.png	image/png	177053	386	248	50	50	\N	300	193	image/png	158846	Samarkand-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
24	\N	\N	2025-05-08 13:25:45.727+00	2025-05-08 13:25:45.654+00	\N	\N	Navoiy.png	image/png	204460	386	248	50	50	\N	300	193	image/png	175146	Navoiy-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
25	\N	\N	2025-05-08 13:26:34.462+00	2025-05-08 13:26:34.29+00	\N	\N	Jizzax.png	image/png	192762	386	248	50	50	\N	300	193	image/png	161511	Jizzax-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
26	\N	\N	2025-05-08 13:27:57.894+00	2025-05-08 13:27:57.835+00	\N	\N	Qarshi.png	image/png	188933	386	248	50	50	\N	300	193	image/png	158998	Qarshi-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
27	\N	\N	2025-05-08 13:28:55.449+00	2025-05-08 13:28:55.392+00	\N	\N	Termez.png	image/png	162119	386	248	50	50	\N	300	193	image/png	146698	Termez-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
28	\N	\N	2025-05-08 13:29:55.651+00	2025-05-08 13:29:55.581+00	\N	\N	Urgench.png	image/png	195721	386	248	50	50	\N	300	193	image/png	171060	Urgench-300x193.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
29	\N	\N	2025-05-15 05:28:27.59+00	2025-05-15 05:28:27.147+00	\N	\N	Buxoro-1.png	image/png	667474	772	496	50	50	\N	300	193	image/png	148162	Buxoro-1-300x193.png	\N	500	500	image/png	607270	Buxoro-1-500x500.png	\N	600	385	image/png	579922	Buxoro-1-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
30	\N	\N	2025-05-15 05:29:14.291+00	2025-05-15 05:29:13.846+00	\N	\N	Navoiy-1.png	image/png	776548	772	496	50	50	\N	300	193	image/png	149734	Navoiy-1-300x193.png	\N	500	500	image/png	597500	Navoiy-1-500x500.png	\N	600	385	image/png	583442	Navoiy-1-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
31	\N	\N	2025-05-15 05:29:27.022+00	2025-05-15 05:29:26.432+00	\N	\N	Jizzax-1.png	image/png	736762	772	496	50	50	\N	300	193	image/png	136064	Jizzax-1-300x193.png	\N	500	500	image/png	538058	Jizzax-1-500x500.png	\N	600	385	image/png	534605	Jizzax-1-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
32	\N	\N	2025-05-15 05:29:46.959+00	2025-05-15 05:29:46.469+00	\N	\N	Qarshi-1.png	image/png	773330	772	496	50	50	\N	300	193	image/png	148648	Qarshi-1-300x193.png	\N	500	500	image/png	577405	Qarshi-1-500x500.png	\N	600	385	image/png	583084	Qarshi-1-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
33	\N	\N	2025-05-15 05:30:18.239+00	2025-05-15 05:30:17.799+00	\N	\N	Olmaliq.png	image/png	641156	772	496	50	50	\N	300	193	image/png	130606	Olmaliq-300x193.png	\N	500	500	image/png	551153	Olmaliq-500x500.png	\N	600	385	image/png	517273	Olmaliq-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
34	\N	\N	2025-05-15 07:45:38.031+00	2025-05-15 07:45:37.5+00	\N	\N	Samarkand-1.png	image/png	698739	772	496	50	50	\N	300	193	image/png	138356	Samarkand-1-300x193.png	\N	500	500	image/png	534084	Samarkand-1-500x500.png	\N	600	385	image/png	535267	Samarkand-1-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
35	\N	\N	2025-05-15 10:49:03.414+00	2025-05-15 10:49:02.798+00	\N	\N	Samarkand (2).png	image/png	698300	772	496	50	50	\N	300	193	image/png	137501	Samarkand (2)-300x193.png	\N	500	500	image/png	534244	Samarkand (2)-500x500.png	\N	600	385	image/png	533541	Samarkand (2)-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
36	\N	\N	2025-05-16 07:14:10.051+00	2025-05-16 07:14:09.41+00	\N	\N	Olmaliq-1.png	image/png	641156	772	496	50	50	\N	300	193	image/png	130606	Olmaliq-1-300x193.png	\N	500	500	image/png	551153	Olmaliq-1-500x500.png	\N	600	385	image/png	517273	Olmaliq-1-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
37	\N	\N	2025-05-16 07:15:14.477+00	2025-05-16 07:15:14.078+00	\N	\N	Olmaliq-2.png	image/png	641156	772	496	50	50	\N	300	193	image/png	130606	Olmaliq-2-300x193.png	\N	500	500	image/png	551153	Olmaliq-2-500x500.png	\N	600	385	image/png	517273	Olmaliq-2-600x385.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
40	\N	\N	2025-08-24 14:25:20.101+00	2025-08-14 09:34:51.379+00	/api/media/file/2-1.webp	\N	2-2.png	image/png	10550	183	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
41	\N	\N	2025-08-24 14:25:32.587+00	2025-08-14 09:35:00.193+00	/api/media/file/3-1.webp	/api/media/file/3-1-300x60.webp	3-2.png	image/png	11057	300	60	50	50	/api/media/file/3-1-300x60.webp	300	60	image/png	11058	3-2-300x60.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
42	\N	\N	2025-08-24 14:25:43.075+00	2025-08-14 09:35:09.642+00	/api/media/file/4-1.webp	\N	4-2.png	image/png	7425	180	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
43	\N	\N	2025-08-24 14:25:52.099+00	2025-08-14 09:35:16.89+00	/api/media/file/5-1.webp	\N	5-2.png	image/png	5104	177	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
44	\N	\N	2025-08-24 14:26:08.146+00	2025-08-14 09:35:28.273+00	/api/media/file/6-2.webp	/api/media/file/6-2-300x70.webp	6-2.png	image/png	16472	300	70	50	50	/api/media/file/6-2-300x70.webp	300	70	image/png	16489	6-2-300x70.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
48	\N	\N	2025-08-14 09:38:29.872+00	2025-08-14 09:37:51.644+00	\N	\N	treasure.webp	image/webp	26948	696	418	50	50	\N	300	180	image/webp	7848	treasure-300x180.webp	\N	500	500	image/webp	22822	treasure-500x500.webp	\N	600	360	image/webp	21246	treasure-600x360.webp	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
39	\N	\N	2025-08-24 14:25:01.393+00	2025-08-14 09:33:31.13+00	/api/media/file/1-1.webp	\N	1-2.png	image/png	9250	252	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
45	\N	\N	2025-08-24 14:26:22.729+00	2025-08-14 09:35:55.026+00	/api/media/file/8-1.webp	\N	8-2.png	image/png	4837	133	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
46	\N	\N	2025-08-24 14:26:38.414+00	2025-08-14 09:36:01.951+00	/api/media/file/9-1.webp	\N	9-2.png	image/png	8004	248	72	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: offices; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.offices (id, updated_at, created_at) FROM stdin;
1	2025-08-29 17:54:55.333+00	2025-05-08 09:55:45.808+00
\.


--
-- Data for Name: offices_items; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.offices_items (_order, _parent_id, id, region, media_id) FROM stdin;
1	1	681c7f3dc216cd7cc3593442	tashkent	20
2	1	681cafe2281828debcefc45b	bukhara	29
3	1	681cb031281828debcefc45f	andijan	22
4	1	681cb06e281828debcefc462	samarkand	35
5	1	681cb0a3281828debcefc465	navoiy	30
6	1	681cb0d8281828debcefc468	jizzax	31
7	1	681cb109281828debcefc46b	qarshi	32
8	1	6826eb96fad20e2c881646a2	tashkentRegion	37
9	1	688039aab733094522f06b92	fergana	22
10	1	68803a39b733094522f06b95	namangan	20
11	1	68803a82b733094522f06b98	khorezm	28
12	1	68803aeeb733094522f06b9b	karakalpakstan	20
13	1	68803b30b733094522f06b9e	sirdaryo	20
14	1	68803b9ab733094522f06ba1	surxondaryo	20
15	1	68803bdeb733094522f06ba4	urganch	27
\.


--
-- Data for Name: offices_items_locales; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.offices_items_locales (title, id, _locale, _parent_id, address) FROM stdin;
Ташкентский филиал	741	ru	681c7f3dc216cd7cc3593442	г. Ташкент, Алмазарский район, улица Сагбан, 30 - тупик, дом 9, ориентир: Старый фарфоровый завод, жилой комплекс Карасарой
Toshkent filiali	742	uz	681c7f3dc216cd7cc3593442	Toshkent shahar, Olmazor tumani, Sag'bon ko'chasi, 30 - tupik, 9 - uy mo'ljal: Eski chinni zavodi, qorasaroy uy-joy kompleks
Бухарский филиал	743	ru	681cafe2281828debcefc45b	г. Бухара, напротив старой заправки губернатора, рядом с мечетью Северный Файзабад, рядом с пунктом замены автомобильного масла
Buxoro filiali	744	uz	681cafe2281828debcefc45b	Buxoro shahar ,Severniy Fayzobod masjidi yonidagi eski hokim zapravkaning qarshisida ,mo'ljal avtomobil moy almashtirish ustaxonasi yonida
Андижанский филиал	745	ru	681cb031281828debcefc45f	г. Андижан, 2-ой микрорайон, 43-й дом, кв. 2а Ориентир: Кафе «Soft Chick»
Andijon filiali	746	uz	681cb031281828debcefc45f	Andijon viloyati, Andijon shahar, 2 - kichik daxa, 43 - uy, 2a xonadon mo'ljal: Yumshoq  jo'ja kafesi
Самаркандский филиал	747	ru	681cb06e281828debcefc462	г. Самарканд, район Мархаббо, улица Буюк Ипак Йули, дом 41, ориентир: (напротив Эвоса)
Samarqand filiali	748	uz	681cb06e281828debcefc462	Samarqand shahar ,Marxabbo massivi ,Buyuk ipak yo'li ko'chasi 41 uy mo'ljal : ( Evos qarshisida )
Навоинский филиал	749	ru	681cb0a3281828debcefc465	г. Навои, улица А.Навои, 10 массив, 38 Б, 6 квартира, дом № 5, ориентир: автосалон «Ширин»
Navoiy filiali	750	uz	681cb0a3281828debcefc465	Navoiy viloyati, Navoiy shahar 10 daxa A.Navoiy kochasi 38 B, 6 xonadon 5-sonli uy mo'ljal: Shirin avtosaloni
Джизакский филиал	751	ru	681cb0d8281828debcefc468	г. Джизак, улица А.Навои, дом 1А, квартира 45, ориентир: напротив кафе «Пальма»
Jizzax filiali	752	uz	681cb0d8281828debcefc468	Jizzax viloyati, Jizzax shahar, A. Navoiy ko'chasi,1A uy, 45 - xonadon mo'ljal: Palma kafesi ro'parasida
Карши филиал	753	ru	681cb109281828debcefc46b	г. Карши, микрорайон Кунчикар, улица Ислама Каримова, 228 - ориентир дома: Нарсуд 1 - пешеходная дорожка
Qarshi filiali	754	uz	681cb109281828debcefc46b	Qashqadaryo viloyati, Qarshi shahar, Kunchiqar mahallasi, Islom Karimov ko'chasi, 228 - uy mo'ljal: Narsud 1 - piyodalar yo'laki
Алмалыкский филиал	755	ru	6826eb96fad20e2c881646a2	г. Алмалык, улица Амира Темура 36, квартира 15
Olmalik filiali	756	uz	6826eb96fad20e2c881646a2	Toshkent viloyati ,Olmaliq shahri ,Amir Temur ko'chasi 36 dom , 15-xonadon
Ферганский филиал	757	ru	688039aab733094522f06b92	г. Фергана, массив Навруз, улица Б. Маргилоний, дом 77А, квартира 30 - ориентир: UZ SALAMANDER
Farg'ona filiali	758	uz	688039aab733094522f06b92	Farg'ona viloyati, Farg'ona shahar, Navro'z mahallasi, B. Marg'iloniy ko'chasi, 77A uy, 30 - xonadon mo'ljal: UZ SALAMANDER
Наманганский филиал	759	ru	68803a39b733094522f06b95	г. Наманган, МСГ Нурафшон, улица Ибрата 11/2, участок 11/1, ориентир квартиры: завод Coca Cola
Namangan filiali	760	uz	68803a39b733094522f06b95	Namangan viloyati, Namangan shahar, Nurafshon MFY ,Ibrat ko`chasi 11/2 mavzey 11/1 xonadon mo'ljal: Coca Cola zavodi
Хорезмский филиал	761	ru	68803a82b733094522f06b98	г. Ургенч, улица Аль-Хорезмий, 79, квартира 1А, ориентир: Медиапарк
Xorazm filiali	762	uz	68803a82b733094522f06b98	Xorazm viloyati, Urganch shahar, Al-Xorazmiy ko'chasi, 79 - uy, 1A xonadon mo'ljal: Mediapark
Нукуский филиал	763	ru	68803aeeb733094522f06b9b	г. Нукус, район Кахармана, улица Т.Кайпбергенова 59/4, ориентир: Таможенное управление
Nukus filiali	764	uz	68803aeeb733094522f06b9b	Qoraqalpog'iston Respublikasi ,Nukus shahri ,Qaxarman Mfy ,T.Kaypbergenov ko'chasi 59/4 ,mo'ljal : Bojxona boshqarmasi
Гулистанский филиал	765	ru	68803b30b733094522f06b9e	г. Гулистан, МСГ «Тараккиет», проспект Узбекистана, 17
Guliston filiali	766	uz	68803b30b733094522f06b9e	Guliston shahar, Taraqqiyot MFY, O'zbekiston shoh kochasi 17 chi uy 
Денауский филиал	767	ru	68803b9ab733094522f06ba1	Денауский район, массив Нурли Манзил, улица Ш.Рашидова, 189 - дом, 1 - торговый отдел, ориентир: Автомойка «Гулистан»
Denov filiali	768	uz	68803b9ab733094522f06ba1	Surxondaryo viloyati, Denov tumani, Nurli manzil mahallasi, Sh. Rashidov ko'chasi, 189 - uy, 1 - savdo bo'limi mo'ljal: Guliston avtomobil yuvish shaxobchasi (Moyka ko'chaning boshida)
Термезский филиал	769	ru	68803bdeb733094522f06ba4	г. Термез, улица Бахта, 10 - ориентир квартиры: 1 - кожная больница
Termiz filiali	770	uz	68803bdeb733094522f06ba4	Surxondaryo viloyati, Termiz shahar, Baxt ko'chasi, 10 - xonadon mo'ljal: 1 - teri kasalxonasi
\.


--
-- Data for Name: offices_items_phones; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.offices_items_phones (_order, _parent_id, id, item) FROM stdin;
1	681c7f3dc216cd7cc3593442	681c7f77c216cd7cc3593444	+998 (78) 113-31-14
1	681cafe2281828debcefc45b	681cb00c281828debcefc45e	+998 (78) 113-31-14
1	681cb031281828debcefc45f	681cb04b281828debcefc461	+998 (78) 113-31-14
1	681cb06e281828debcefc462	681cb084281828debcefc464	+998 (78) 113-31-14
1	681cb0a3281828debcefc465	681cb0bc281828debcefc467	+998 (78) 113-31-14
1	681cb0d8281828debcefc468	681cb0ed281828debcefc46a	+998 (78) 113-31-14
1	681cb109281828debcefc46b	681cb140281828debcefc46d	+998 (78) 113-31-14
1	6826eb96fad20e2c881646a2	6826eba4fad20e2c881646a3	+998 (78) 113-31-14
1	688039aab733094522f06b92	688039f2b733094522f06b94	+998 (78) 113-31-14
1	68803a39b733094522f06b95	68803a60b733094522f06b97	+998 (78) 113-31-14
1	68803a82b733094522f06b98	68803abfb733094522f06b9a	+998 (78) 113-31-14
1	68803aeeb733094522f06b9b	68803b25b733094522f06b9d	+998 (78) 113-31-14
1	68803b30b733094522f06b9e	68803b61b733094522f06ba0	+998 (78) 113-31-14
1	68803b9ab733094522f06ba1	68803bb4b733094522f06ba3	+998 (78) 113-31-14
1	68803bdeb733094522f06ba4	68803c29b733094522f06ba6	+998 (78) 113-31-14
\.


--
-- Data for Name: offices_items_schedule; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.offices_items_schedule (_order, _parent_id, id) FROM stdin;
1	681c7f3dc216cd7cc3593442	681c7f74c216cd7cc3593443
1	681cafe2281828debcefc45b	681cb003281828debcefc45c
1	681cb031281828debcefc45f	681cb049281828debcefc460
1	681cb06e281828debcefc462	681cb082281828debcefc463
1	681cb0a3281828debcefc465	681cb0ba281828debcefc466
1	681cb0d8281828debcefc468	681cb0ec281828debcefc469
1	681cb109281828debcefc46b	681cb120281828debcefc46c
1	6826eb96fad20e2c881646a2	6826eba5fad20e2c881646a4
1	688039aab733094522f06b92	688039eab733094522f06b93
1	68803a39b733094522f06b95	68803a58b733094522f06b96
1	68803a82b733094522f06b98	68803ab1b733094522f06b99
1	68803aeeb733094522f06b9b	68803b12b733094522f06b9c
1	68803b30b733094522f06b9e	68803b55b733094522f06b9f
1	68803b9ab733094522f06ba1	68803ba9b733094522f06ba2
1	68803bdeb733094522f06ba4	68803bf7b733094522f06ba5
\.


--
-- Data for Name: offices_items_schedule_locales; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.offices_items_schedule_locales (item, id, _locale, _parent_id) FROM stdin;
Пн-Сб с 09:00-18:00	741	ru	681c7f74c216cd7cc3593443
Du-Shan 09:00-18:00	742	uz	681c7f74c216cd7cc3593443
Пн-Сб с 09:00-18:00	743	ru	681cb003281828debcefc45c
Du-Shan 09:00-18:00	744	uz	681cb003281828debcefc45c
Пн-Сб с 09:00-18:00	745	ru	681cb049281828debcefc460
Du-Shan 09:00-18:00	746	uz	681cb049281828debcefc460
Пн-Сб с 09:00-18:00	747	ru	681cb082281828debcefc463
Du-Shan 09:00-18:00	748	uz	681cb082281828debcefc463
Пн-Сб с 09:00-18:00	749	ru	681cb0ba281828debcefc466
Du-Shan 09:00-18:00	750	uz	681cb0ba281828debcefc466
Пн-Сб с 09:00-18:00	751	ru	681cb0ec281828debcefc469
Du-Shan 09:00-18:00	752	uz	681cb0ec281828debcefc469
Пн-Сб с 09:00-18:00	753	ru	681cb120281828debcefc46c
Du-Shan 09:00-18:00	754	uz	681cb120281828debcefc46c
Пн-Сб с 09:00-18:00	755	ru	6826eba5fad20e2c881646a4
Du-Shan 09:00-18:00	756	uz	6826eba5fad20e2c881646a4
Пн-Сб с 09:00-18:00	757	ru	688039eab733094522f06b93
Du-Shan 09:00-18:00	758	uz	688039eab733094522f06b93
Пн-Сб с 09:00-18:00	759	ru	68803a58b733094522f06b96
Du-Shan 09:00-18:00	760	uz	68803a58b733094522f06b96
Пн-Сб с 09:00-18:00	761	ru	68803ab1b733094522f06b99
Du-Shan 09:00-18:00	762	uz	68803ab1b733094522f06b99
Пн-Сб с 09:00-18:00	763	ru	68803b12b733094522f06b9c
Du-Shan 09:00-18:00	764	uz	68803b12b733094522f06b9c
Пн-Сб с 09:00-18:00	765	ru	68803b55b733094522f06b9f
Du-Shan 09:00-18:00	766	uz	68803b55b733094522f06b9f
Пн-Сб с 09:00-18:00	767	ru	68803ba9b733094522f06ba2
Du-Shan 09:00-18:00	768	uz	68803ba9b733094522f06ba2
Пн-Сб с 09:00-18:00	769	ru	68803bf7b733094522f06ba5
Du-Shan 09:00-18:00	770	uz	68803bf7b733094522f06ba5
\.


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages (id, published_at, slug, slug_lock, updated_at, created_at, parent_id) FROM stdin;
10	2025-05-13 07:07:23.275+00	bez-zaloga	f	2025-05-26 11:21:43.685+00	2025-05-13 07:07:23.275+00	7
9	2025-05-13 07:07:01.05+00	avtokredit	f	2025-05-26 11:21:52.018+00	2025-05-13 07:07:01.05+00	7
8	2025-05-13 07:04:49.765+00	pod-zalog	f	2025-05-26 11:22:02.32+00	2025-05-13 07:04:49.764+00	7
5	2025-05-02 08:58:58.983+00	faq	t	2025-05-26 09:42:39.606+00	2025-05-02 08:58:58.953+00	\N
7	2025-05-12 13:00:57.476+00		t	2025-05-26 09:43:20.066+00	2025-05-12 13:00:57.47+00	\N
2	2025-05-02 08:55:40.981+00	blog	t	2025-05-26 09:45:34.573+00	2025-05-02 08:55:40.947+00	\N
1	2025-05-02 08:55:20.142+00	home	t	2025-05-26 09:45:40.284+00	2025-05-02 08:55:20.108+00	\N
4	2025-05-02 08:57:21.364+00	contacts	t	2025-05-26 09:45:47.581+00	2025-05-02 08:57:21.325+00	\N
3	2025-05-02 08:56:33.181+00	about	t	2025-05-26 09:45:54.234+00	2025-05-02 08:56:33.141+00	\N
\.


--
-- Data for Name: pages_blocks_about; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_about (_order, _parent_id, _path, id, block_name) FROM stdin;
1	3	layout	681488997712899849a9f27c	\N
\.


--
-- Data for Name: pages_blocks_about_licenses; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_about_licenses (_order, _parent_id, _path, id, block_name) FROM stdin;
3	3	layout	681488bc7712899849a9f27e	\N
\.


--
-- Data for Name: pages_blocks_additional_docs; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_additional_docs (_order, _parent_id, _path, id, block_name) FROM stdin;
\.


--
-- Data for Name: pages_blocks_archive; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_archive (_order, _parent_id, _path, id, block_name) FROM stdin;
1	2	layout	6814888b7712899849a9f27b	\N
5	1	layout	68148e7bee4313209618c270	\N
\.


--
-- Data for Name: pages_blocks_call_to_action; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_call_to_action (_order, _parent_id, _path, id, block_name) FROM stdin;
1	7	layout	6821f107ccc1292757e607ca	\N
3	1	layout	68148e6aee4313209618c26f	\N
\.


--
-- Data for Name: pages_blocks_employees; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_employees (_order, _parent_id, _path, id, block_name) FROM stdin;
2	3	layout	681488b27712899849a9f27d	\N
\.


--
-- Data for Name: pages_blocks_faq; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_faq (_order, _parent_id, _path, id, "full", block_name) FROM stdin;
1	5	layout	681489507712899849a9f285	t	\N
2	4	layout	681488ef7712899849a9f281	\N	\N
5	3	layout	681488bf7712899849a9f27f	\N	\N
\.


--
-- Data for Name: pages_blocks_hero; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_hero (_order, _parent_id, _path, id, block_name) FROM stdin;
1	1	layout	681488737712899849a9f27a	\N
\.


--
-- Data for Name: pages_blocks_licenses; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_licenses (_order, _parent_id, _path, id, block_name) FROM stdin;
4	1	layout	68148e5bee4313209618c26e	\N
\.


--
-- Data for Name: pages_blocks_map; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_map (_order, _parent_id, _path, id, block_name) FROM stdin;
7	1	layout	68148e8dee4313209618c272	\N
1	4	layout	681488e27712899849a9f280	\N
4	3	layout	681489327712899849a9f283	\N
\.


--
-- Data for Name: pages_blocks_partners; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_partners (_order, _parent_id, _path, id, block_name) FROM stdin;
6	1	layout	68148e89ee4313209618c271	\N
\.


--
-- Data for Name: pages_blocks_products; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_blocks_products (_order, _parent_id, _path, id, block_name) FROM stdin;
2	1	layout	68148e53ee4313209618c26d	\N
\.


--
-- Data for Name: pages_locales; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.pages_locales (title, meta_title, meta_image_id, meta_description, id, _locale, _parent_id) FROM stdin;
Без залога	Микрозаймы без залога в Узбекистане на карту	\N	Оформите микрозайм без залога онлайн за 1 час. Для получения нужен только паспорт. Чтобы узнать ваш лимит по микрокредиту, оставьте заявку на сайте	87	ru	10
Garovsiz	O'zbekistonda garovsiz mikroqarz kartaga 	\N	Garovlarsiz mikroqarzni 1 soat ichida onlayn rasmiylashtiring. Pulni olish uchun sizga faqat pasport kerak. Limitingizni bilish uchun saytga so'rov qoldiring	88	uz	10
Автокредит	Автокредит в Узбекистане. Оформление за 2 часа! | Yaxshi Niyat	\N	Оформите автокредит на машину с 2007 года с минимальным взносом. Воспользуйтесь автокредитным калькулятором на сайте, чтобы рассчитать условия.	89	ru	9
Avtokredit	Avtokredit O'zbekistonda. Rasmiylashtirish 2 soat ichida!	\N	2007 yildan baland bo’lgan avtomobillar evaziga avtokredit oling. Shartlarni hisoblash uchun saytdagi avtokredit kalkulyatoridan foydalaning.	90	uz	9
Под залог	Yaxshi Niyat - займы под залог недвижимости, авто и золота	\N	Получите деньги под залог имущества за 2 часа! Бесплатная оценка, минимум документов. Оставьте заявку на сайте, чтобы узнать свой лимит.	91	ru	8
Garov evaziga	Yaxshi Niyat — uy-joy, avtomobil va tilla garovi evaziga qarzlar	\N	Uy-joy garovi evaziga 2 soat ichida pulni oling! Baholash bepul, hujjatlar minimum. Limitingizni bilish uchun saytga so'rov qoldiring.	92	uz	8
Faq	Помощь от Yaxshi Niyat	\N	Ответы на частые вопросы о микрозаймах: как оформить займ или автокредит, какие документы нужны, какие сроки и условия получения займа	61	ru	5
faq	Yaxshi Niyat’dan yordam	\N	Mikroqarzlar haqida tez-tez so'raladigan savollarga javoblar: mikroqarz yoki avtokreditni qanday olish mumkin, qanday hujjatlar kerak, qarz olish shartlari va muddatlari qanday	62	uz	5
Products	\N	\N	\N	67	ru	7
Продукты	\N	\N	\N	68	uz	7
Blog	Блог Yaxshi Niyat — полезные статьи о микрозаймах и финансах	\N	Советы по оформлению микрозаймов, финансовое планирование, условия займов и актуальные новости микрофинансовой сферы в Узбекистане.	77	ru	2
blog	Yaxshi Niyat blogi. Mikroqarzlar va moliya haqida foydali maqolalar	\N	Mikroqarzlarni rasmiylashtirish bo'yicha maslahatlar, moliyaviy rejalashtirish, qarz olish shartlari va O'zbekistondagi mikromoliya sohasining dolzarb yangiliklari.	78	uz	2
Home	Yaxshi Niyat. Оформление микрозаймов за 2 часа	\N	Оформите микрозайм под залог, без залога или автокредит на выгодных условиях в вашем городе. Быстрое одобрение, прозрачные условия, минимум документов	81	ru	1
home	Yaxshi Niyat. Mikroqarzni 2 soat ichida rasmiylashtirish	\N	O'z shahringizda qulay shartlarda garov bilan, garovsiz mikrokredit yoki avtokredit rasmiylashtiring. Shaffof shartlar asosida qarzga pul oling.	82	uz	1
Contacts	Контакты микрофинансовой организации Yaxshi Niyat	\N	Чтобы получить микрозайм, свяжитесь с нами по номеру +998781133114 с 9:00 до 18:00 каждый день или оставьте заявку на сайте в любое время.	83	ru	4
contacts	Yaxshi Niyat — mikromoliya tashkilotining kontaktlari	\N	Mikroqarzni kartaga olish uchun har kuni soat 9:00-18:00 gacha (78)1133114 raqami orqali biz bilan bog'laning yoki istalgan vaqtda saytda so'rov qoldiring	84	uz	4
About	Yaxshi Niyat — микрофинансовая организация в Узбекистане	\N	Получите деньги в филиале в вашем городе в день обращения. Оформите микрокредит без скрытых комиссий. ООО ”CASH U mikromoliya tashkiloti”	85	ru	3
about	Yaxshi Niyat — O'zbekistondagi mikromoliya tashkiloti	\N	Pulni murojaat qilingan kuniyoq shahringizdagi filialdan oling. Yashirin foizlarsiz mikrokredit rasmiylashtiring. "CASH U mikromoliya tashkiloti" MCHJ	86	uz	3
\.


--
-- Data for Name: partners; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.partners (id, updated_at, created_at) FROM stdin;
1	2025-08-14 09:36:41.021+00	2025-05-02 09:08:16.55+00
\.


--
-- Data for Name: partners_items; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.partners_items (_order, _parent_id, id, media_id) FROM stdin;
1	1	68148b56ee4313209618c264	39
2	1	68148b59ee4313209618c265	40
3	1	68148b5aee4313209618c266	41
4	1	68148b5cee4313209618c267	42
5	1	68148b5dee4313209618c268	43
6	1	68148b5fee4313209618c269	44
7	1	68148b77ee4313209618c26b	45
8	1	68148b7bee4313209618c26c	46
\.


--
-- Data for Name: payload_locked_documents; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.payload_locked_documents (id, global_slug, updated_at, created_at) FROM stdin;
216	partners	2025-08-24 15:15:55.043+00	2025-08-24 15:15:55.045+00
224	\N	2025-09-24 06:11:29.921+00	2025-09-24 06:11:29.922+00
\.


--
-- Data for Name: payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.payload_locked_documents_rels (id, "order", parent_id, path, pages_id, media_id, users_id, posts_id, redirects_id) FROM stdin;
358	\N	216	user	\N	\N	1	\N	\N
367	\N	224	document	10	\N	\N	\N	\N
368	\N	224	user	\N	\N	1	\N	\N
\.


--
-- Data for Name: payload_migrations; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.payload_migrations (id, name, batch, updated_at, created_at) FROM stdin;
1	dev	-1	2025-08-23 16:33:30.703+00	2025-05-02 08:53:52.449+00
\.


--
-- Data for Name: payload_preferences; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.payload_preferences (id, key, value, updated_at, created_at) FROM stdin;
20	users-list	{"preset": null}	2025-05-12 11:23:01.427+00	2025-05-12 11:23:01.428+00
2	posts-list	{"preset": null}	2025-05-02 08:59:15.556+00	2025-05-02 08:59:15.529+00
3	media-list	{"limit": 10, "preset": null}	2025-05-02 09:07:30.303+00	2025-05-02 09:07:08.659+00
44	collection-posts	{}	2025-09-12 12:24:35.26+00	2025-09-12 12:24:35.263+00
21	media-list	{"limit": 10, "preset": null}	2025-05-12 11:23:13.576+00	2025-05-12 11:23:10.902+00
13	collection-pages-3	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-12 11:23:28.839+00	2025-05-12 07:13:34.008+00
11	collection-posts-1	{"fields": {"_index-2": {"tabIndex": 1}}}	2025-09-17 09:32:15.508+00	2025-05-12 06:58:55.534+00
22	collection-pages-7	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-12 13:11:54.753+00	2025-05-12 13:01:19.63+00
5	collection-pages-1	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-05 14:17:18.015+00	2025-05-05 14:17:17.698+00
6	collection-pages-4	{"fields": {"layout": {"collapsed": ["681488e27712899849a9f280"]}}}	2025-09-22 05:45:12.03+00	2025-05-06 05:56:31.947+00
23	redirects-list	{"limit": 10, "preset": null}	2025-05-13 07:34:38.592+00	2025-05-13 07:33:21.736+00
46	collection-redirects	{}	2025-09-22 12:41:54.831+00	2025-09-22 12:41:54.833+00
39	nav	{"open": true, "groups": {"Коллекции": {"open": true}, "Глобальные": {"open": true}}}	2025-09-23 04:08:30.738+00	2025-07-23 01:12:59.594+00
25	collection-pages-9	{"fields": {"_index-0": {"tabIndex": 1}}}	2025-05-26 07:42:49.37+00	2025-05-13 12:20:33.589+00
32	collection-pages-10	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-26 09:04:28.305+00	2025-05-23 10:04:41.301+00
33	collection-pages-1	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-26 09:20:29.426+00	2025-05-23 10:06:01.047+00
30	posts-list	{"preset": null}	2025-05-15 11:15:21.06+00	2025-05-15 11:15:21.063+00
45	collection-pages-10	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-09-24 06:13:34.233+00	2025-09-22 12:20:38.34+00
9	users-list	{"preset": null}	2025-05-08 07:34:01.359+00	2025-05-08 07:34:01.36+00
37	collection-pages-2	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-26 09:22:10.704+00	2025-05-23 13:34:45.541+00
8	locale	"uz"	2025-09-24 06:18:21.438+00	2025-05-08 06:54:23.377+00
41	collection-pages-5	{"fields": {"_index-0": {"tabIndex": 1}}}	2025-08-12 14:47:49.282+00	2025-08-12 14:47:49.303+00
1	pages-list	{"limit": 10, "preset": null}	2025-05-08 09:59:18.634+00	2025-05-02 08:55:01.851+00
34	collection-pages-3	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-26 09:23:53.164+00	2025-05-23 11:31:03.868+00
35	collection-pages-4	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-26 09:24:16.362+00	2025-05-23 11:43:17.779+00
27	collection-pages-5	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-26 09:25:16.373+00	2025-05-13 12:20:44.914+00
47	collection-users	{"limit": 10}	2025-09-24 06:18:21.542+00	2025-09-23 04:07:36.36+00
38	collection-pages-8	{"fields": {"layout": {"collapsed": []}, "_index-0": {"tabIndex": 0}}}	2025-09-24 06:32:17.606+00	2025-05-26 11:21:58.623+00
10	redirects-list	{"sort": "-createdAt", "limit": 10, "preset": null}	2025-05-12 04:05:43.21+00	2025-05-08 10:42:47.092+00
15	pages-list	{"limit": 10, "preset": null}	2025-05-12 07:14:12.68+00	2025-05-12 07:14:09.083+00
4	collection-pages-3	{"fields": {"layout": {"collapsed": []}, "_index-0": {"tabIndex": 0}}}	2025-05-12 07:16:15.408+00	2025-05-02 09:27:27.014+00
26	media-list	{"limit": 10, "preset": null}	2025-05-23 10:05:13.465+00	2025-05-13 12:20:37.978+00
17	collection-pages-1	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-05-12 10:37:34.362+00	2025-05-12 10:37:30.498+00
18	posts-list	{"preset": null}	2025-05-12 11:10:41.493+00	2025-05-12 11:10:41.494+00
12	collection-posts-1	{"fields": {"_index-2": {"tabIndex": 0}}}	2025-05-12 11:11:35.079+00	2025-05-12 07:11:26.103+00
19	redirects-list	{"preset": null}	2025-05-12 11:12:00.213+00	2025-05-12 11:12:00.214+00
14	locale	"ru"	2025-05-12 11:14:15.596+00	2025-05-12 07:13:53.711+00
16	global-calc	{"fields": {"_index-0": {"tabIndex": 2}}}	2025-05-12 11:19:26.518+00	2025-05-12 07:18:40.5+00
7	global-calc	{"fields": {"_index-0": {"tabIndex": 1}}}	2025-06-04 07:46:15.603+00	2025-05-07 11:27:01.817+00
24	pages-list	{"limit": 10, "preset": null}	2025-05-26 05:07:47.944+00	2025-05-13 12:20:20.804+00
42	collection-pages	{}	2025-08-24 12:30:17.191+00	2025-08-24 12:30:17.489+00
31	global-calc	{"fields": {"_index-0": {"tabIndex": 2}}}	2025-06-04 11:20:00.653+00	2025-05-16 07:43:58.33+00
28	collection-pages-7	{"fields": {"_index-0": {"tabIndex": 0}}}	2025-06-24 12:07:03.301+00	2025-05-13 12:20:55.171+00
43	collection-media	{"limit": 10}	2025-08-24 14:27:34.468+00	2025-08-24 14:10:12.905+00
36	collection-pages-8	{"fields": {"_index-0": {"tabIndex": 1}}}	2025-06-24 12:42:24.913+00	2025-05-23 11:52:51.033+00
29	locale	"uz"	2025-06-24 12:42:46.029+00	2025-05-15 11:15:13.687+00
40	global-offices	{"fields": {"items": {"collapsed": ["681c7f3dc216cd7cc3593442", "681cafe2281828debcefc45b", "681cb031281828debcefc45f", "681cb06e281828debcefc462", "681cb0a3281828debcefc465", "681cb0d8281828debcefc468", "681cb109281828debcefc46b", "6826eb96fad20e2c881646a2", "688039aab733094522f06b92", "68803a39b733094522f06b95", "68803a82b733094522f06b98", "68803aeeb733094522f06b9b", "68803b30b733094522f06b9e", "68803b9ab733094522f06ba1"]}, "items.13.phones": {"collapsed": ["68803bb4b733094522f06ba3"]}, "items.13.Schedule": {"collapsed": ["68803ba9b733094522f06ba2"]}, "items.14.Schedule": {"collapsed": []}}}	2025-08-29 17:46:43.329+00	2025-07-23 01:13:15.581+00
\.


--
-- Data for Name: payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.payload_preferences_rels (id, "order", parent_id, path, users_id) FROM stdin;
72	\N	20	user	2
2	\N	2	user	1
4	\N	3	user	1
74	\N	21	user	2
461	\N	40	user	1
76	\N	13	user	2
397	\N	41	user	1
78	\N	22	user	1
7	\N	5	user	1
462	\N	44	user	1
80	\N	23	user	3
464	\N	11	user	1
465	\N	6	user	1
156	\N	25	user	3
157	\N	32	user	3
158	\N	33	user	3
89	\N	30	user	3
467	\N	46	user	1
161	\N	37	user	3
23	\N	9	user	1
470	\N	39	user	1
164	\N	34	user	3
27	\N	1	user	1
165	\N	35	user	3
166	\N	27	user	3
473	\N	45	user	1
474	\N	8	user	1
475	\N	47	user	1
38	\N	10	user	1
480	\N	38	user	1
55	\N	15	user	2
57	\N	4	user	1
119	\N	26	user	3
62	\N	17	user	2
63	\N	18	user	2
66	\N	12	user	2
67	\N	19	user	2
69	\N	14	user	2
71	\N	16	user	2
439	\N	42	user	1
196	\N	7	user	1
441	\N	43	user	1
135	\N	24	user	3
202	\N	31	user	3
203	\N	28	user	3
204	\N	36	user	3
205	\N	29	user	3
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.posts (id, hero_image_id, published_at, slug, slug_lock, updated_at, created_at) FROM stdin;
1	48	2025-05-06 07:00:00+00	vygodnee-chem-v-lombarde	f	2025-08-14 09:38:31.338+00	2025-05-06 08:51:25.86+00
\.


--
-- Data for Name: posts_locales; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.posts_locales (title, description, content, meta_title, meta_image_id, meta_description, id, _locale, _parent_id) FROM stdin;
Выгоднее, чем в ломбарде!	Мы выдаём за грамм изделия больше, чем во всех ломбардах города, а процентную ставку делаем меньше.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Решили сдать свои ювелирные изделия в ломбард? Лучше обратитесь в Yaxshi Niyat!", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Мы выдаём за грамм изделия больше, чем во всех ломбардах города, а процентную ставку делаем меньше.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Для оценки изделия и суммы выплаты вам необходимо обратиться в наш офис по адресу в Ташкенте:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Алмазарский район, ул. Сагбан 30 туп, д. 9.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Для получения подробной информации обращайтесь по номерам:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "+998 (78) 113-31-14", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	\N	\N	\N	13	ru	1
"Lombard"dan ko'ra hamyonbop!	Biz shahardagi barcha lombardlarga qaraganda har bir gramm uchun ko'proq pul beramiz va foiz stavkasini esa pasaytiramiz.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Taqinchoqlaringizni lombardga sotmoqchimisiz? Yaxshisi, \\"Yaxshi Niyat\\"ga murojaat eting!", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Biz shahardagi barcha lombardlarga qaraganda har bir gramm uchun ko'proq pul beramiz va foiz stavkasini esa pasaytiramiz.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Mahsulot va to'lov miqdorini baholash uchun Toshkent shahridagi ofisimizga murojaat qilishingiz kerak:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Olmazor tumani, Sag'bon 30 berk ko'ch, 9-uy.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Batafsil ma'lumotga ega bo'lish uchun quyidagi raqamlarga murojaat qiling:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "start", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "+998 (78) 113-31-14", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": "ltr", "textStyle": "", "textFormat": 0}], "direction": "ltr"}}	\N	\N	\N	14	uz	1
\.


--
-- Data for Name: redirects; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.redirects (id, "from", to_type, to_url, updated_at, created_at) FROM stdin;
1	/ru/o-kompanii	custom	/ru/about	2025-05-12 03:59:08.457+00	2025-05-08 11:23:03.768+00
4	/uz/savol-va-javob	custom	/uz/faq	2025-05-12 04:00:32.014+00	2025-05-12 04:00:08.713+00
5	/ru/novosti	custom	/ru/blog	2025-05-12 04:01:11.708+00	2025-05-12 04:00:43.436+00
6	/uz/yangiliklar	custom	/uz/blog	2025-05-12 04:01:36.44+00	2025-05-12 04:01:14.886+00
9	/ru/mikrozajm-s-zalogom	custom	/ru/products/pod-zalog	2025-05-12 04:02:52.745+00	2025-05-12 04:02:27.368+00
10	/uz/garovli-mikroqarz	custom	/uz/products/pod-zalog	2025-05-12 04:03:11.464+00	2025-05-12 04:02:56.151+00
11	/ru/avtokredit	custom	/ru/products/avtokredit	2025-05-12 04:03:40.516+00	2025-05-12 04:03:13.401+00
12	/uz/avtokredit-1	custom	/uz/products/avtokredit	2025-05-12 04:04:02.518+00	2025-05-12 04:03:43.809+00
13	/ru/mikrozajm-bez-zaloga	custom	/ru/products/bez-zaloga	2025-05-12 04:04:27.666+00	2025-05-12 04:04:12.611+00
14	/uz/kredit-uchun-ariza	custom	/uz/products/pod-zalog	2025-05-12 04:05:12.975+00	2025-05-12 04:04:29.921+00
16	/uz/garovsiz-mikroqarz	custom	/uz/products/bez-zaloga	2025-05-12 04:06:18.955+00	2025-05-12 04:06:09.009+00
17	/ru/vygodnee-chem-v-lombarde	custom	https://yaxshiniyat.uz/ru	2025-05-13 07:35:03.781+00	2025-05-13 07:34:22.992+00
18	/ru/kreditnaja-linija-na-tri-goda-vpervye-v-uzbekistane	custom	https://yaxshiniyat.uz/ru	2025-05-13 07:35:35.45+00	2025-05-13 07:35:35.449+00
19	/uz/kredit-liniyasi-uch-yilga-ozbekistonda-birinchi-marta	custom	https://yaxshiniyat.uz/uz	2025-05-13 07:36:07.672+00	2025-05-13 07:36:07.671+00
20	/uz/lombarddan-kora-hamyonbop	custom	https://yaxshiniyat.uz/uz	2025-05-13 07:36:32.585+00	2025-05-13 07:36:32.583+00
7	/ru/kontakty	custom	/ru/contacts	2025-05-14 13:37:36.689+00	2025-05-12 04:01:53.309+00
8	/uz/aloqalar	custom	/uz/contacts	2025-05-14 13:37:59.05+00	2025-05-12 04:02:04.71+00
3	/ru/voprosy-i-otvety	custom	/ru/faq	2025-05-14 13:38:05.445+00	2025-05-12 04:00:03.674+00
2	/uz/kompaniya-haqida	custom	/uz/about	2025-05-14 13:38:12.944+00	2025-05-12 03:59:28.245+00
15	/ru/zajavka-na-poluchenie-kredita	custom	/ru/products/pod-zalog	2025-05-15 05:36:30.091+00	2025-05-12 04:05:15.419+00
\.


--
-- Data for Name: redirects_rels; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.redirects_rels (id, "order", parent_id, path, pages_id, posts_id) FROM stdin;
4	\N	1	to.reference	3	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.users (id, name, updated_at, created_at, email, reset_password_token, reset_password_expiration, salt, hash, login_attempts, lock_until) FROM stdin;
2	artur	2025-05-12 07:09:49.1+00	2025-05-12 07:09:48.633+00	a.salyamov@tayyab.uz	\N	\N	0bd90aa73ca500d7c5a021d17dfe57f58cee87802463296a94378c564e65e342	bbeb1bb2045f219b1eef4910df3c60f636c9b511a24f5752451598390681a4df6975c7ab32952572670dd41dea5029d6cbc7ef67b0a7f9c7a7b1fb4a65e3740da58571eae460e0f7a21f02db2d76d5b1c046c1d276c2383ed3f73ee4cc5047d226c5c109e7bc1900f3684e659532ebb698cc67b495c07f789e140f8268e4454d37a2db583ca200db5cd5ae46b1aecf05b09f5700650716774dc299b8fd61aac525b03b229e1c9c7231bc107d11ee97fe8541c1c7e69b80dcb914fd31bfc47dedd89b6c51645ccdc9842342cf94671a226d63c851b32094cc97f420e76e77d717bfa01f5eace166f58c2637e1e063c070f892b7c083503fe9c3b626d58473d89d59f792329d5f948d27e7ae91930f04779e6a72a3bb0208e3790b263903366f2578d3d94189c9b711770852db69da17ab06c4a0975162cd7917b355dd348251379d3e9e17cdc79f322efea2510f80f7f8de4c85ffcedc7c0f2c1809464a12bce40a8eb1a967d91170bb90785edf44be49d0f7c0c2995b168deae64574eef3aee1957d15709e18e200a2b5c44e14839f295d73b41b05ab14dcbd526828ecde4ddd294675dcc37a91a38c4188d32fbe351e15d5788b8958ca0f842094c4bfe41686a16e925316868a885c8d6d3c58fe954ce3569c90593c5dbeee3642b0c80366920ecb48db9118ac2822df437c93ce2502a037091509767ae3d718e88c6e9c5acd	0	\N
3	Daria	2025-05-12 11:29:11.139+00	2025-05-12 11:29:10.698+00	daria@tayyab.uz	\N	\N	db1bd510479af0de049d0add5c46daced3029dc1fce276a9f721320cc6b7d403	51a5bebcfa8daeecac8b8fbef7e0ba0d135896b05f423b7a41857e92272f454cc4fa57159349bbeb731393aa62a83e009b8b0630d55129d610f3ad7f812db52ef11abb222be04b754d36c977f38f3406484e442930700d54d00023854b11787726b5c0366f597abdaf330dd9bdaddb435b7d56d66e2a61aaf0e8df4a38b78d9899d3c62c7f0ea07ef51a6edc744ca6b724981c5c8e41b92c541426e21f996e931fcb8e50e6ddc5ea6844c7bf8c08dac1f8527b9b686d03a34b65e714da1ebea931015f7833e606dd88fc4a8af6f636c7b73a56b42c2fedf5d2e1d7064ff691a9e92e5f356a81df2629f2b5bb0cd2636cc1e86f93038b624e0c5f693b09e3c0567b445966f4173f99765c8bee03932e3e4d89b16ad50d91db6879f0f0005c4e0235610307fbed57fea1d1aa5f89d46fd19a7b2e9d46fd17d7e92d67e12cf631c39ea60f05aa6e730c4d02ee45de1ce6331dc033a6a93a5558fa9456dbfc836d6f30fb99702e01f93283df79b0710983b9d08743c4a0ba56408bd7c533d36fa87c1fe53110211ba8ec614a59a56b1dbd30551085604b569ceaa9e0a86511558961d29056d24bd9f6f1128c326568b0a3dcd2cbc1e553dbf3d4ce9f7313897a6724c83af86c0ec7ed34b39441122ed7dcbe3eb7c851b721d236af75bd859e106d78bc9fa39457bfcde22f0681d9eaa2a5d31b4012288ab639b6ba80ebf2e9bb31b1	0	\N
1	Admin	2025-09-24 10:15:49.462+00	2025-05-02 08:54:59.577+00	admin@yaxshiniyat.uz	\N	\N	37608fcd8c8daafbd2e261ce61749a93bfb80ada85b907c28271a0c8b3d059c9	a4be024159c31953556a34566e6b6b4a008718ee93622e992b5c1d07373b600124eb8741e48d647e557c7dd81d840cc35c2558404eddb090c00f7fe24fe904e5b94052bcbeb2b1acda6c08821822ee078fae2e2a82914456a48944ca5249c2316ab84ce306cddd5ca19a60e3b68a1b420131f5d34c0d4fe3f7f1a331b8776ee87057e9085239bf43bf8838e8d2c6e48e9f3b02e55b75c5046de84a813f3bb0be095cd4402391100dd16f273e3ceb7cc0634c0d8958af19683a565192c80ce9f308be30f18a81cbf66abe75d0957d9ceb899e76830dd6da188cf0684008ff46b812bf0660491559d043e5ae5bacdf489b50a982826b169ce12fe736dcc6751ab37efeca6e45d26d266df45b25f895f963451903d2da772100668fa15ba82a84129fc8677b141199302497225d08ffa3d75e8fb0a95f89a4e0cff7fec256f467535711aa1b6c4fa281b1877e6adcdbf8396ae7d33d01426e1a94b8f341282e643403f36fd0b515b818d21431dcb878d68b304bd4c9bc42184ba1a8c89726388253f221ba577535d8b50c1fc82cc9b5ab0c3e4fc3d4881285ae1e15710b4d38d1bc32f64fec731493d8a3f1d657443a94af055c913718528d760af81a041bbb14e8abf109dbdfbe651dee721ab7bfe34c80368f3e8882a0bf3e21d8b4b273ccfedda30b9a3b205a3839eed80e7524a930e95d887ae67aa155802b147da94ca38503	0	\N
\.


--
-- Data for Name: users_sessions; Type: TABLE DATA; Schema: public; Owner: yaxshiniyat
--

COPY public.users_sessions (_order, _parent_id, id, created_at, expires_at) FROM stdin;
1	1	a7b50511-cb78-4df1-b2c3-232c258c8ee2	2025-09-24 10:15:49.461+00	2025-09-24 12:15:49.461+00
\.


--
-- Name: calc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.calc_id_seq', 1, true);


--
-- Name: faq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.faq_id_seq', 1, true);


--
-- Name: faq_items_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.faq_items_locales_id_seq', 56, true);


--
-- Name: footer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.footer_id_seq', 1, true);


--
-- Name: footer_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.footer_locales_id_seq', 9, true);


--
-- Name: header_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.header_id_seq', 1, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.media_id_seq', 48, true);


--
-- Name: offices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.offices_id_seq', 1, true);


--
-- Name: offices_items_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.offices_items_locales_id_seq', 770, true);


--
-- Name: offices_items_schedule_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.offices_items_schedule_locales_id_seq', 770, true);


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.pages_id_seq', 10, true);


--
-- Name: pages_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.pages_locales_id_seq', 92, true);


--
-- Name: partners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.partners_id_seq', 1, true);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.payload_locked_documents_id_seq', 224, true);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.payload_locked_documents_rels_id_seq', 368, true);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.payload_migrations_id_seq', 1, true);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.payload_preferences_id_seq', 47, true);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.payload_preferences_rels_id_seq', 480, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, true);


--
-- Name: posts_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.posts_locales_id_seq', 14, true);


--
-- Name: redirects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.redirects_id_seq', 25, true);


--
-- Name: redirects_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.redirects_rels_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yaxshiniyat
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: calc calc_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.calc
    ADD CONSTRAINT calc_pkey PRIMARY KEY (id);


--
-- Name: faq_items_locales faq_items_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq_items_locales
    ADD CONSTRAINT faq_items_locales_pkey PRIMARY KEY (id);


--
-- Name: faq_items faq_items_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq_items
    ADD CONSTRAINT faq_items_pkey PRIMARY KEY (id);


--
-- Name: faq faq_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_pkey PRIMARY KEY (id);


--
-- Name: footer_locales footer_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.footer_locales
    ADD CONSTRAINT footer_locales_pkey PRIMARY KEY (id);


--
-- Name: footer footer_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.footer
    ADD CONSTRAINT footer_pkey PRIMARY KEY (id);


--
-- Name: header header_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.header
    ADD CONSTRAINT header_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: offices_items_locales offices_items_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_locales
    ADD CONSTRAINT offices_items_locales_pkey PRIMARY KEY (id);


--
-- Name: offices_items_phones offices_items_phones_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_phones
    ADD CONSTRAINT offices_items_phones_pkey PRIMARY KEY (id);


--
-- Name: offices_items offices_items_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items
    ADD CONSTRAINT offices_items_pkey PRIMARY KEY (id);


--
-- Name: offices_items_schedule_locales offices_items_schedule_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_schedule_locales
    ADD CONSTRAINT offices_items_schedule_locales_pkey PRIMARY KEY (id);


--
-- Name: offices_items_schedule offices_items_schedule_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_schedule
    ADD CONSTRAINT offices_items_schedule_pkey PRIMARY KEY (id);


--
-- Name: offices offices_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices
    ADD CONSTRAINT offices_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_about_licenses pages_blocks_about_licenses_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_about_licenses
    ADD CONSTRAINT pages_blocks_about_licenses_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_about pages_blocks_about_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_about
    ADD CONSTRAINT pages_blocks_about_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_additional_docs pages_blocks_additional_docs_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_additional_docs
    ADD CONSTRAINT pages_blocks_additional_docs_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_archive pages_blocks_archive_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_archive
    ADD CONSTRAINT pages_blocks_archive_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_call_to_action pages_blocks_call_to_action_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_call_to_action
    ADD CONSTRAINT pages_blocks_call_to_action_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_employees pages_blocks_employees_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_employees
    ADD CONSTRAINT pages_blocks_employees_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_faq pages_blocks_faq_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_faq
    ADD CONSTRAINT pages_blocks_faq_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_hero pages_blocks_hero_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_hero
    ADD CONSTRAINT pages_blocks_hero_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_licenses pages_blocks_licenses_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_licenses
    ADD CONSTRAINT pages_blocks_licenses_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_map pages_blocks_map_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_map
    ADD CONSTRAINT pages_blocks_map_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_partners pages_blocks_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_partners
    ADD CONSTRAINT pages_blocks_partners_pkey PRIMARY KEY (id);


--
-- Name: pages_blocks_products pages_blocks_products_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_products
    ADD CONSTRAINT pages_blocks_products_pkey PRIMARY KEY (id);


--
-- Name: pages_locales pages_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_locales
    ADD CONSTRAINT pages_locales_pkey PRIMARY KEY (id);


--
-- Name: pages pages_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);


--
-- Name: partners_items partners_items_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.partners_items
    ADD CONSTRAINT partners_items_pkey PRIMARY KEY (id);


--
-- Name: partners partners_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents payload_locked_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents
    ADD CONSTRAINT payload_locked_documents_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pkey PRIMARY KEY (id);


--
-- Name: payload_migrations payload_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_migrations
    ADD CONSTRAINT payload_migrations_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences payload_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_preferences
    ADD CONSTRAINT payload_preferences_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences_rels payload_preferences_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_pkey PRIMARY KEY (id);


--
-- Name: posts_locales posts_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts_locales
    ADD CONSTRAINT posts_locales_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: redirects redirects_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects
    ADD CONSTRAINT redirects_pkey PRIMARY KEY (id);


--
-- Name: redirects_rels redirects_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects_rels
    ADD CONSTRAINT redirects_rels_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_sessions users_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_pkey PRIMARY KEY (id);


--
-- Name: faq_items_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX faq_items_locales_locale_parent_id_unique ON public.faq_items_locales USING btree (_locale, _parent_id);


--
-- Name: faq_items_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX faq_items_order_idx ON public.faq_items USING btree (_order);


--
-- Name: faq_items_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX faq_items_parent_id_idx ON public.faq_items USING btree (_parent_id);


--
-- Name: footer_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX footer_locales_locale_parent_id_unique ON public.footer_locales USING btree (_locale, _parent_id);


--
-- Name: media_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_created_at_idx ON public.media USING btree (created_at);


--
-- Name: media_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX media_filename_idx ON public.media USING btree (filename);


--
-- Name: media_sizes_large_sizes_large_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_large_sizes_large_filename_idx ON public.media USING btree (sizes_large_filename);


--
-- Name: media_sizes_medium_sizes_medium_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_medium_sizes_medium_filename_idx ON public.media USING btree (sizes_medium_filename);


--
-- Name: media_sizes_og_sizes_og_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_og_sizes_og_filename_idx ON public.media USING btree (sizes_og_filename);


--
-- Name: media_sizes_small_sizes_small_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_small_sizes_small_filename_idx ON public.media USING btree (sizes_small_filename);


--
-- Name: media_sizes_square_sizes_square_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_square_sizes_square_filename_idx ON public.media USING btree (sizes_square_filename);


--
-- Name: media_sizes_thumbnail_sizes_thumbnail_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_thumbnail_sizes_thumbnail_filename_idx ON public.media USING btree (sizes_thumbnail_filename);


--
-- Name: media_sizes_xlarge_sizes_xlarge_filename_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_sizes_xlarge_sizes_xlarge_filename_idx ON public.media USING btree (sizes_xlarge_filename);


--
-- Name: media_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX media_updated_at_idx ON public.media USING btree (updated_at);


--
-- Name: offices_items_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX offices_items_locales_locale_parent_id_unique ON public.offices_items_locales USING btree (_locale, _parent_id);


--
-- Name: offices_items_media_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_media_idx ON public.offices_items USING btree (media_id);


--
-- Name: offices_items_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_order_idx ON public.offices_items USING btree (_order);


--
-- Name: offices_items_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_parent_id_idx ON public.offices_items USING btree (_parent_id);


--
-- Name: offices_items_phones_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_phones_order_idx ON public.offices_items_phones USING btree (_order);


--
-- Name: offices_items_phones_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_phones_parent_id_idx ON public.offices_items_phones USING btree (_parent_id);


--
-- Name: offices_items_schedule_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX offices_items_schedule_locales_locale_parent_id_unique ON public.offices_items_schedule_locales USING btree (_locale, _parent_id);


--
-- Name: offices_items_schedule_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_schedule_order_idx ON public.offices_items_schedule USING btree (_order);


--
-- Name: offices_items_schedule_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX offices_items_schedule_parent_id_idx ON public.offices_items_schedule USING btree (_parent_id);


--
-- Name: pages_blocks_about_licenses_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_about_licenses_order_idx ON public.pages_blocks_about_licenses USING btree (_order);


--
-- Name: pages_blocks_about_licenses_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_about_licenses_parent_id_idx ON public.pages_blocks_about_licenses USING btree (_parent_id);


--
-- Name: pages_blocks_about_licenses_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_about_licenses_path_idx ON public.pages_blocks_about_licenses USING btree (_path);


--
-- Name: pages_blocks_about_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_about_order_idx ON public.pages_blocks_about USING btree (_order);


--
-- Name: pages_blocks_about_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_about_parent_id_idx ON public.pages_blocks_about USING btree (_parent_id);


--
-- Name: pages_blocks_about_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_about_path_idx ON public.pages_blocks_about USING btree (_path);


--
-- Name: pages_blocks_additional_docs_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_additional_docs_order_idx ON public.pages_blocks_additional_docs USING btree (_order);


--
-- Name: pages_blocks_additional_docs_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_additional_docs_parent_id_idx ON public.pages_blocks_additional_docs USING btree (_parent_id);


--
-- Name: pages_blocks_additional_docs_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_additional_docs_path_idx ON public.pages_blocks_additional_docs USING btree (_path);


--
-- Name: pages_blocks_archive_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_archive_order_idx ON public.pages_blocks_archive USING btree (_order);


--
-- Name: pages_blocks_archive_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_archive_parent_id_idx ON public.pages_blocks_archive USING btree (_parent_id);


--
-- Name: pages_blocks_archive_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_archive_path_idx ON public.pages_blocks_archive USING btree (_path);


--
-- Name: pages_blocks_call_to_action_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_call_to_action_order_idx ON public.pages_blocks_call_to_action USING btree (_order);


--
-- Name: pages_blocks_call_to_action_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_call_to_action_parent_id_idx ON public.pages_blocks_call_to_action USING btree (_parent_id);


--
-- Name: pages_blocks_call_to_action_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_call_to_action_path_idx ON public.pages_blocks_call_to_action USING btree (_path);


--
-- Name: pages_blocks_employees_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_employees_order_idx ON public.pages_blocks_employees USING btree (_order);


--
-- Name: pages_blocks_employees_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_employees_parent_id_idx ON public.pages_blocks_employees USING btree (_parent_id);


--
-- Name: pages_blocks_employees_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_employees_path_idx ON public.pages_blocks_employees USING btree (_path);


--
-- Name: pages_blocks_faq_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_faq_order_idx ON public.pages_blocks_faq USING btree (_order);


--
-- Name: pages_blocks_faq_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_faq_parent_id_idx ON public.pages_blocks_faq USING btree (_parent_id);


--
-- Name: pages_blocks_faq_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_faq_path_idx ON public.pages_blocks_faq USING btree (_path);


--
-- Name: pages_blocks_hero_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_hero_order_idx ON public.pages_blocks_hero USING btree (_order);


--
-- Name: pages_blocks_hero_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_hero_parent_id_idx ON public.pages_blocks_hero USING btree (_parent_id);


--
-- Name: pages_blocks_hero_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_hero_path_idx ON public.pages_blocks_hero USING btree (_path);


--
-- Name: pages_blocks_licenses_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_licenses_order_idx ON public.pages_blocks_licenses USING btree (_order);


--
-- Name: pages_blocks_licenses_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_licenses_parent_id_idx ON public.pages_blocks_licenses USING btree (_parent_id);


--
-- Name: pages_blocks_licenses_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_licenses_path_idx ON public.pages_blocks_licenses USING btree (_path);


--
-- Name: pages_blocks_map_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_map_order_idx ON public.pages_blocks_map USING btree (_order);


--
-- Name: pages_blocks_map_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_map_parent_id_idx ON public.pages_blocks_map USING btree (_parent_id);


--
-- Name: pages_blocks_map_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_map_path_idx ON public.pages_blocks_map USING btree (_path);


--
-- Name: pages_blocks_partners_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_partners_order_idx ON public.pages_blocks_partners USING btree (_order);


--
-- Name: pages_blocks_partners_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_partners_parent_id_idx ON public.pages_blocks_partners USING btree (_parent_id);


--
-- Name: pages_blocks_partners_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_partners_path_idx ON public.pages_blocks_partners USING btree (_path);


--
-- Name: pages_blocks_products_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_products_order_idx ON public.pages_blocks_products USING btree (_order);


--
-- Name: pages_blocks_products_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_products_parent_id_idx ON public.pages_blocks_products USING btree (_parent_id);


--
-- Name: pages_blocks_products_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_blocks_products_path_idx ON public.pages_blocks_products USING btree (_path);


--
-- Name: pages_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_created_at_idx ON public.pages USING btree (created_at);


--
-- Name: pages_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX pages_locales_locale_parent_id_unique ON public.pages_locales USING btree (_locale, _parent_id);


--
-- Name: pages_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_meta_meta_image_idx ON public.pages_locales USING btree (meta_image_id, _locale);


--
-- Name: pages_parent_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_parent_idx ON public.pages USING btree (parent_id);


--
-- Name: pages_slug_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_slug_idx ON public.pages USING btree (slug);


--
-- Name: pages_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX pages_updated_at_idx ON public.pages USING btree (updated_at);


--
-- Name: partners_items_media_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX partners_items_media_idx ON public.partners_items USING btree (media_id);


--
-- Name: partners_items_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX partners_items_order_idx ON public.partners_items USING btree (_order);


--
-- Name: partners_items_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX partners_items_parent_id_idx ON public.partners_items USING btree (_parent_id);


--
-- Name: payload_locked_documents_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_created_at_idx ON public.payload_locked_documents USING btree (created_at);


--
-- Name: payload_locked_documents_global_slug_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_global_slug_idx ON public.payload_locked_documents USING btree (global_slug);


--
-- Name: payload_locked_documents_rels_media_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_media_id_idx ON public.payload_locked_documents_rels USING btree (media_id);


--
-- Name: payload_locked_documents_rels_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_order_idx ON public.payload_locked_documents_rels USING btree ("order");


--
-- Name: payload_locked_documents_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_pages_id_idx ON public.payload_locked_documents_rels USING btree (pages_id);


--
-- Name: payload_locked_documents_rels_parent_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_parent_idx ON public.payload_locked_documents_rels USING btree (parent_id);


--
-- Name: payload_locked_documents_rels_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_path_idx ON public.payload_locked_documents_rels USING btree (path);


--
-- Name: payload_locked_documents_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_posts_id_idx ON public.payload_locked_documents_rels USING btree (posts_id);


--
-- Name: payload_locked_documents_rels_redirects_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_redirects_id_idx ON public.payload_locked_documents_rels USING btree (redirects_id);


--
-- Name: payload_locked_documents_rels_users_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_rels_users_id_idx ON public.payload_locked_documents_rels USING btree (users_id);


--
-- Name: payload_locked_documents_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_locked_documents_updated_at_idx ON public.payload_locked_documents USING btree (updated_at);


--
-- Name: payload_migrations_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_migrations_created_at_idx ON public.payload_migrations USING btree (created_at);


--
-- Name: payload_migrations_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_migrations_updated_at_idx ON public.payload_migrations USING btree (updated_at);


--
-- Name: payload_preferences_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_created_at_idx ON public.payload_preferences USING btree (created_at);


--
-- Name: payload_preferences_key_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_key_idx ON public.payload_preferences USING btree (key);


--
-- Name: payload_preferences_rels_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_rels_order_idx ON public.payload_preferences_rels USING btree ("order");


--
-- Name: payload_preferences_rels_parent_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_rels_parent_idx ON public.payload_preferences_rels USING btree (parent_id);


--
-- Name: payload_preferences_rels_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_rels_path_idx ON public.payload_preferences_rels USING btree (path);


--
-- Name: payload_preferences_rels_users_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_rels_users_id_idx ON public.payload_preferences_rels USING btree (users_id);


--
-- Name: payload_preferences_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX payload_preferences_updated_at_idx ON public.payload_preferences USING btree (updated_at);


--
-- Name: posts_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX posts_created_at_idx ON public.posts USING btree (created_at);


--
-- Name: posts_hero_image_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX posts_hero_image_idx ON public.posts USING btree (hero_image_id);


--
-- Name: posts_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX posts_locales_locale_parent_id_unique ON public.posts_locales USING btree (_locale, _parent_id);


--
-- Name: posts_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX posts_meta_meta_image_idx ON public.posts_locales USING btree (meta_image_id, _locale);


--
-- Name: posts_slug_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX posts_slug_idx ON public.posts USING btree (slug);


--
-- Name: posts_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX posts_updated_at_idx ON public.posts USING btree (updated_at);


--
-- Name: redirects_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_created_at_idx ON public.redirects USING btree (created_at);


--
-- Name: redirects_from_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX redirects_from_idx ON public.redirects USING btree ("from");


--
-- Name: redirects_rels_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_rels_order_idx ON public.redirects_rels USING btree ("order");


--
-- Name: redirects_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_rels_pages_id_idx ON public.redirects_rels USING btree (pages_id);


--
-- Name: redirects_rels_parent_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_rels_parent_idx ON public.redirects_rels USING btree (parent_id);


--
-- Name: redirects_rels_path_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_rels_path_idx ON public.redirects_rels USING btree (path);


--
-- Name: redirects_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_rels_posts_id_idx ON public.redirects_rels USING btree (posts_id);


--
-- Name: redirects_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX redirects_updated_at_idx ON public.redirects USING btree (updated_at);


--
-- Name: users_created_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX users_created_at_idx ON public.users USING btree (created_at);


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);


--
-- Name: users_sessions_order_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX users_sessions_order_idx ON public.users_sessions USING btree (_order);


--
-- Name: users_sessions_parent_id_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX users_sessions_parent_id_idx ON public.users_sessions USING btree (_parent_id);


--
-- Name: users_updated_at_idx; Type: INDEX; Schema: public; Owner: yaxshiniyat
--

CREATE INDEX users_updated_at_idx ON public.users USING btree (updated_at);


--
-- Name: faq_items_locales faq_items_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq_items_locales
    ADD CONSTRAINT faq_items_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.faq_items(id) ON DELETE CASCADE;


--
-- Name: faq_items faq_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.faq_items
    ADD CONSTRAINT faq_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.faq(id) ON DELETE CASCADE;


--
-- Name: footer_locales footer_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.footer_locales
    ADD CONSTRAINT footer_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.footer(id) ON DELETE CASCADE;


--
-- Name: offices_items_locales offices_items_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_locales
    ADD CONSTRAINT offices_items_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.offices_items(id) ON DELETE CASCADE;


--
-- Name: offices_items offices_items_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items
    ADD CONSTRAINT offices_items_media_id_media_id_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: offices_items offices_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items
    ADD CONSTRAINT offices_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.offices(id) ON DELETE CASCADE;


--
-- Name: offices_items_phones offices_items_phones_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_phones
    ADD CONSTRAINT offices_items_phones_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.offices_items(id) ON DELETE CASCADE;


--
-- Name: offices_items_schedule_locales offices_items_schedule_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_schedule_locales
    ADD CONSTRAINT offices_items_schedule_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.offices_items_schedule(id) ON DELETE CASCADE;


--
-- Name: offices_items_schedule offices_items_schedule_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.offices_items_schedule
    ADD CONSTRAINT offices_items_schedule_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.offices_items(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_about_licenses pages_blocks_about_licenses_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_about_licenses
    ADD CONSTRAINT pages_blocks_about_licenses_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_about pages_blocks_about_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_about
    ADD CONSTRAINT pages_blocks_about_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_additional_docs pages_blocks_additional_docs_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_additional_docs
    ADD CONSTRAINT pages_blocks_additional_docs_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_archive pages_blocks_archive_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_archive
    ADD CONSTRAINT pages_blocks_archive_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_call_to_action pages_blocks_call_to_action_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_call_to_action
    ADD CONSTRAINT pages_blocks_call_to_action_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_employees pages_blocks_employees_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_employees
    ADD CONSTRAINT pages_blocks_employees_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_faq pages_blocks_faq_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_faq
    ADD CONSTRAINT pages_blocks_faq_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_hero pages_blocks_hero_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_hero
    ADD CONSTRAINT pages_blocks_hero_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_licenses pages_blocks_licenses_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_licenses
    ADD CONSTRAINT pages_blocks_licenses_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_map pages_blocks_map_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_map
    ADD CONSTRAINT pages_blocks_map_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_partners pages_blocks_partners_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_partners
    ADD CONSTRAINT pages_blocks_partners_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_blocks_products pages_blocks_products_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_blocks_products
    ADD CONSTRAINT pages_blocks_products_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_locales pages_locales_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_locales
    ADD CONSTRAINT pages_locales_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: pages_locales pages_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages_locales
    ADD CONSTRAINT pages_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages pages_parent_id_pages_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_parent_id_pages_id_fk FOREIGN KEY (parent_id) REFERENCES public.pages(id) ON DELETE SET NULL;


--
-- Name: partners_items partners_items_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.partners_items
    ADD CONSTRAINT partners_items_media_id_media_id_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: partners_items partners_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.partners_items
    ADD CONSTRAINT partners_items_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.partners(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pages_fk FOREIGN KEY (pages_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_locked_documents(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_posts_fk FOREIGN KEY (posts_id) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_redirects_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_redirects_fk FOREIGN KEY (redirects_id) REFERENCES public.redirects(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_preferences(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: posts posts_hero_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_hero_image_id_media_id_fk FOREIGN KEY (hero_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: posts_locales posts_locales_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts_locales
    ADD CONSTRAINT posts_locales_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: posts_locales posts_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.posts_locales
    ADD CONSTRAINT posts_locales_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: redirects_rels redirects_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects_rels
    ADD CONSTRAINT redirects_rels_pages_fk FOREIGN KEY (pages_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: redirects_rels redirects_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects_rels
    ADD CONSTRAINT redirects_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.redirects(id) ON DELETE CASCADE;


--
-- Name: redirects_rels redirects_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.redirects_rels
    ADD CONSTRAINT redirects_rels_posts_fk FOREIGN KEY (posts_id) REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: users_sessions users_sessions_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: yaxshiniyat
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO yaxshiniyat;


--
-- PostgreSQL database dump complete
--

\unrestrict 32MNDxQnNJbx5dRITsfn6AMIuN0oexaKaqXFfMA1dxAS3E2WoNTle6pRgXWrqUx

