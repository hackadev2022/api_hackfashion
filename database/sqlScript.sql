
CREATE SEQUENCE public.colors_color_id_seq_1;

CREATE TABLE public.colors (
                color_id INTEGER NOT NULL DEFAULT nextval('public.colors_color_id_seq_1'),
                color VARCHAR NOT NULL,
                CONSTRAINT colors_pk PRIMARY KEY (color_id)
);


ALTER SEQUENCE public.colors_color_id_seq_1 OWNED BY public.colors.color_id;

CREATE SEQUENCE public.types_type_id_seq;

CREATE TABLE public.types (
                type_id INTEGER NOT NULL DEFAULT nextval('public.types_type_id_seq'),
                type VARCHAR NOT NULL,
                CONSTRAINT types_pk PRIMARY KEY (type_id)
);


ALTER SEQUENCE public.types_type_id_seq OWNED BY public.types.type_id;

CREATE SEQUENCE public.customer_customer_id_seq;

CREATE TABLE public.customer (
                customer_id INTEGER NOT NULL DEFAULT nextval('public.customer_customer_id_seq'),
                name VARCHAR(60) NOT NULL,
                email VARCHAR(60) NOT NULL,
                password VARCHAR NOT NULL,
                phone VARCHAR(13),
                CONSTRAINT customer_pk PRIMARY KEY (customer_id)
);
ALTER TABLE customer ADD CONSTRAINT unique_email UNIQUE (email);


ALTER SEQUENCE public.customer_customer_id_seq OWNED BY public.customer.customer_id;

CREATE SEQUENCE public.address_id_address_seq_1;

CREATE TABLE public.address (
                id_address INTEGER NOT NULL DEFAULT nextval('public.address_id_address_seq_1'),
                customer_id INTEGER NOT NULL,
                address VARCHAR(100) NOT NULL,
                uf VARCHAR(2) NOT NULL,
                city VARCHAR(30) NOT NULL,
                cep VARCHAR(9) NOT NULL,
                CONSTRAINT address_pk PRIMARY KEY (id_address)
);


ALTER SEQUENCE public.address_id_address_seq_1 OWNED BY public.address.id_address;

CREATE TABLE public.pedidos (
                pedido_id INTEGER NOT NULL,
                customer_id INTEGER NOT NULL,
                id_address INTEGER NOT NULL,
                total_price REAL NOT NULL,
                date TIMESTAMP NOT NULL,
                status VARCHAR NOT NULL,
                CONSTRAINT pedidos_pk PRIMARY KEY (pedido_id)
);


CREATE SEQUENCE public.products_product_id_seq;

CREATE TABLE public.products (
                product_id INTEGER NOT NULL DEFAULT nextval('public.products_product_id_seq'),
                name VARCHAR(30) NOT NULL,
                img_link VARCHAR NOT NULL,
                price REAL NOT NULL,
                trademark VARCHAR NOT NULL,
                offer_percent REAL DEFAULT 0,
                in_stock BOOLEAN NOT NULL,
                CONSTRAINT products_pk PRIMARY KEY (product_id)
);


ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;

CREATE SEQUENCE public.product_colors_product_color_id_seq;

CREATE TABLE public.product_colors (
                product_color_id INTEGER NOT NULL DEFAULT nextval('public.product_colors_product_color_id_seq'),
                product_id INTEGER NOT NULL,
                color_id INTEGER NOT NULL,
                CONSTRAINT product_colors_pk PRIMARY KEY (product_color_id)
);


ALTER SEQUENCE public.product_colors_product_color_id_seq OWNED BY public.product_colors.product_color_id;

CREATE TABLE public.product_sizes (
                product_id INTEGER NOT NULL,
                p INTEGER NOT NULL,
                m INTEGER DEFAULT 0 NOT NULL,
                g INTEGER NOT NULL,
                gg INTEGER NOT NULL,
                CONSTRAINT product_sizes_pk PRIMARY KEY (product_id)
);


CREATE TABLE public.rating_star (
                product_id INTEGER NOT NULL,
                one_star INTEGER DEFAULT 0 NOT NULL,
                two_star INTEGER DEFAULT 0 NOT NULL,
                three_star INTEGER DEFAULT 0 NOT NULL,
                four_star INTEGER DEFAULT 0 NOT NULL,
                five_star INTEGER DEFAULT 1 NOT NULL,
                CONSTRAINT rating_star_pk PRIMARY KEY (product_id)
);


CREATE SEQUENCE public.product_types_product_type_id_seq;

CREATE TABLE public.product_types (
                product_type_id INTEGER NOT NULL DEFAULT nextval('public.product_types_product_type_id_seq'),
                product_id INTEGER NOT NULL,
                type_id INTEGER NOT NULL,
                CONSTRAINT product_types_pk PRIMARY KEY (product_type_id)
);


ALTER SEQUENCE public.product_types_product_type_id_seq OWNED BY public.product_types.product_type_id;

CREATE SEQUENCE public.order_details_order_details_id_seq;

CREATE TABLE public.order_details (
                order_details_id INTEGER NOT NULL DEFAULT nextval('public.order_details_order_details_id_seq'),
                product_id INTEGER NOT NULL,
                pedido_id INTEGER NOT NULL,
                quantity INTEGER NOT NULL,
                size VARCHAR(2) NOT NULL,
                CONSTRAINT order_details_pk PRIMARY KEY (order_details_id)
);


ALTER SEQUENCE public.order_details_order_details_id_seq OWNED BY public.order_details.order_details_id;

ALTER TABLE public.product_colors ADD CONSTRAINT colors_product_colors_fk
FOREIGN KEY (color_id)
REFERENCES public.colors (color_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.product_types ADD CONSTRAINT type_product_type_fk
FOREIGN KEY (type_id)
REFERENCES public.types (type_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.pedidos ADD CONSTRAINT users_pedidos_fk
FOREIGN KEY (customer_id)
REFERENCES public.customer (customer_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.address ADD CONSTRAINT users_address_fk
FOREIGN KEY (customer_id)
REFERENCES public.customer (customer_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.pedidos ADD CONSTRAINT address_pedidos_fk
FOREIGN KEY (id_address)
REFERENCES public.address (id_address)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.order_details ADD CONSTRAINT pedidos_order_details_fk
FOREIGN KEY (pedido_id)
REFERENCES public.pedidos (pedido_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.order_details ADD CONSTRAINT products_order_details_fk
FOREIGN KEY (product_id)
REFERENCES public.products (product_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.product_types ADD CONSTRAINT products_product_type_fk
FOREIGN KEY (product_id)
REFERENCES public.products (product_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.rating_star ADD CONSTRAINT products_rating_star_fk
FOREIGN KEY (product_id)
REFERENCES public.products (product_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.product_sizes ADD CONSTRAINT products_product_sizes_fk
FOREIGN KEY (product_id)
REFERENCES public.products (product_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.product_colors ADD CONSTRAINT products_product_colors_fk
FOREIGN KEY (product_id)
REFERENCES public.products (product_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

CREATE SEQUENCE public.pedidos_pedido_id_seq;

ALTER TABLE pedidos ALTER COLUMN pedido_id SET DEFAULT nextval('public.pedidos_pedido_id_seq');