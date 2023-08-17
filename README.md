## Introdcttion  database design 
1. we will learn
   1.  [Database](#database)
       - [DBMS কি?](#dbms)
       - [Query language](#query-language)
       - [Types of Data](#types-of-data)
       - [Relational Database](#relational-database)
          - [Cardinality](#cardinality)
          - [key](#key)
          - [ERD](#erd-entity-relationship-diagram)
          - [ERD visualization](#erd-idea-visualization)
       - [Connecting Postgresql](#connecting-postgresql) 
       - [Database user management](#database-user-management)
       - [Sql vs other databases](#sql-vs-other-databases)
       - [create , alter , drop database](#create-alter--drop-database)
       - [datatypes in postgresql](#datatype-in-postgress)
       - [create , updata , delete table](#create-delete--update-table)
       - [add constraint](#constraints)
       - [Insert table](#insertion)
       - [Alter table](#alter-table)
       - [Foreign key constraint and data integrity](#foreign-key-constraint-and-data-integrity)
       - [Insertion and deletion](#insertion-and-deletion)
         - [Delete table](#delete-data)
         - [Update table](#update-data)
         - [select table](#select-basic)
       - [sort and limit and offset](#sort-limit-and-offset)
         - [sort](#sort)
         - [pagination or limit and offset](#pagination-or-limit-and-offset)

       - [Explore more select and like operator](#explore-more-select-and-like-operator)
         - [in , not in](#in-and-not-in)
         - [between](#between)
         - [Like](#like)
         - [specific prosition search in string](#specific-position-in-string)
       - [Joining table](#joining-table)
         - [where and on](#where-and-on)
         - [inner join](#inner-join--join)
         - [left join](#left-outer-join--left-join)
         - [right join](#right-outer-join--right-join)
         - [full join](#full-join)
         - [Cross join](#cross-join)
         - [natural join](#natural-join)
       - [Aggregation function](#aggregate-functions)
         - [Group by](#group-by-clause)
       - [subqueries](#subqueries-unleashing-the-power-of-nesting)
       - [View](#view)
       - [Store procedure and funciton](#store-procedure-and-funciton)
       - [Trigger](#trigger)
       - [index and optimization](#indexing-and-optimization)

  


       
   2.  Prisma
       - Prisma

         - [what is Prisma](#what-is-prisma)
         - [why is Prisma](#why-prisma)
         - [limitation](#limitations-of-prisma)
         - [system requirements](#system-requirements)
       - Prisma setup
         - [prisma-setup](#prisma-setup)
       - Folder structure
         - [folder structure](#folder-structure)
       - [creating database schema and prisma migrate and install prisma client](#creating-database-schema-and-prisma-migrate-and-install-prisma-client)
         - [extension](#download-prisma-extension)
         - [model create and migration create and run](#sql-migration-create-and-run)
         - [Write your first Query with Prisma Client (create and read)](#write-your-first-query-with-prisma-client-create-and-read)
           - [read](#read-database)
           - [create user](#create-user)
        - [generating Prisma client and prisma migrate](#generating-prisma-client-and-prisma-migrate)
           - [generate migration](#generate-migration)
           - [genetate prisma](#generate-prismma)
        - [Data model , Names  in the Underling Database and Relation](#data-model--names-in-the-underling-database-and-relation)
          - [Data model , Names](#data-model--names)
          - [relation one table to another table](#relation-one-table-to-another-table)
          - [one to one relationship](#one-to-one-relationship)
          - [one to many relationships](#one-to-many-relationship)
        - [Mapping Fieldcolumn Names , setting up express , Cors , and organizing file Stuctures](#mapping-fieldcolumn-names--setting-up-express--cors--and-organizing-file-stuctures)
          - [mapping field column names](#mapping-fieldcolumn-names)
          - [setting up express and cors](#setting-up-express--cors--run-server)
          - [arrange folder in your project](#arrange-folder-in-you-project)
        - [Creating Users and Introduction to Prisma Studio](#creating-database-schema-and-prisma-migrate-and-install-prisma-client)
          - [creating user route](#user-router-তৈরি-করব)
          - [creating user service](#creating-user-service)
          - [creating prisma studio server and run](#creating-prisma-studio-server-and-run)
        - [Create or update profile conditionally](#create-or-update-profile-conditionally)
        - [include relations and select relation fields](#include-relations-and-select-relation-fields)
          - [get al user](#get-all-user)
          - [select specific one column or field](#select-specific-one-column-or-field)
          - [Relatioal table select](#relatioal-table-select)
          - [Get single user with relational table data](#get-single-user-with-relational-table-data)
        - [create and get all post](#create-and-get-all-post-different-ways)
          - [Create post and get all table relation data](#create-post-and-get-all-table-relation-data)
          - [get all post](#get-all-post)
       -  [Filter and Ordering](#filter-and-ordering)
         - [ordering and sorting](#ordering-and-sorting)
         - [default sort order](#default-sort-order)

        
          




   3.  Database design teqniques
   4.  Er diagram
   5.  Sql queries
   6.  parisma
    
## Database 
**ডাটাবেজে আমাদের ডাটা স্টোর হয় । হার্ড ডিস্ক এবং এসএসডি তে ডাটা সেভ হয় ।**

**আমরা কি স্টোর করি ? digital data স্টোর করি**

**আমরা ডাটাবেজে কেন ডাটা রাখবো ? আমরা তো ফাইল হিসেবে ও রাখতে পারি । `txt , mp4` এক্সটেনশন ইউজ করতে হয় ।**

**ডাটাবেজকে আমরা `multiple` টাইপ এপলিকেশন দিয়ে ইউজ করতে পারি । যেমন আমরা `web application , android application , desktop application` থেকে ইউজ করতে পারি**

## DBMS 



**এটা `database management system` । যা একটা সফটওয়ার ডাটাবেজ হ্যান্ডেল করে ।**

**যা দশ পনেরটা ডাটাবেজ হ্যান্ডেল করতে পারব ।**

**যেটার `GUI` থাকতে পারে । যেমন :  `postgresql , mysql , mongodb` artifial intelegence এর ক্ষেত্রে `vector`** 

**আবার থাকতে পারে ।**

## Query language

**ডাটাবেজের সাথে কানেক্ট করতে ব্যবহার করা হয় । যেমন : `SQL` mane `Structured Query Language`**

## Types of data


 
1. Relational --- Sql
  **এখানে টেবিল আকারে ডাটা থাকে । এক টেবিল  এর সাথে আরেকটা টেবিলের সাথে `connect` থাকে**
2. Non relational ----  NoSql
  **এখানে অবজেক্ট  আকারে ডাটা থাকে । `relational` ডাটাবেজ হলে ও `benifit` পাবো না ।**
  ### এখানে আমরা কি ধরণের ডাটা রাখব ? আমরা রাখব যেগুলো একটার সাথে একটা রিলেশন ন। 
  ### এখানে আমরা রাখতে পারি `student analytics` মানে ইউজার একটা একশ্যন দিবে এইটা সেইভ করে রাখব , `data analytics`
## Relational Database
- Based on Relational Model (relational algebra)
  ### যারা `csc` তে পড়ে তারা `relational algebra` করে । এখানে `theoritical algebra` দেখাব`
- Uses SQL for data management + manipulation
- Data in RDBMS is organized in TABLE , Rows and columns
- Each table has define schema (mongodb তে `schema সাপোট করে না , mongoose এটা সলভ করে ।)
- PostgreSQL , MySQL , Oracle , micosoft, server etc

## Cardinality



**Relational database এর আরেকটা `concept` `cardinality` একটা টেবিলের `row` সাথে আরেকটা `row` রিলেশনটা হলো `Cardinality` বলে ।**

- one to one ( person -> birth) **একজন ব্যক্তির একটা সারটিফেকেট থাকতে পারে ।** 
- one to one (Optional on one side) (**person এর `driving license` থাকতে পারে আবার নাও থাকতে পারে ।**) 
- Many to many (course -> student **একটা `student` অনেক  `course` নিতে পারে যেটা ইউনিভাসিটিতে নিতে পারে । আবার একটা `course` এ অনেক স্টুডেন্ট থাকতে পারে ।**)
- many to one ( person -> birthplace **একদিক `person` এর জন্মস্থান একই থাকতে পারে । foreign key থাকবে many side এ**)
- One to many (order -> product **যেমন একটা অডারের জন্য অনেক `product` থাকতে পারে । মানে একটা অডারে অনেক `product` অডার করে ফেলছে ।** )

## Key


**এটা রিলেশনাল ডেটাবেজের ্‌একটা অংশ । তিন প্রকার কী আছে  যেমন :**
- Primary key
 **যেটা ১, ২ , এভাবে একটা টেবিলের ইউনিক আকরে থাকে । যেটা প্রাইমারি কী থাকবে** 
- Composite key
 **এখানে `primary key` থাকবে না । যেমন : ২টা ৩টা কলাম মিলে ্‌একটা ইউনিক করতে পারি । যেমন ভাই , বোন দুজন স্কুলে পড়ে এবং তাদের `parent no` সেইম হলেও নাম ভিন্ন । সুতারাং আমরা ‌‌`nanme , parent no` নিয়ে একটা `composite key` বানাতে পারি ।**
- Foreign key
**একটা টেবিলের `primary key` অন্য টেবিলে রিলেশন করতে primary key টা আনতে হয় এই যে এটাকে `foreign key` বলে ।**

## ERD (Entity Relationship Diagram)

**অনেক রকমের `Diagram` থাকে ।**

## ERD তে তিনটা কম্পোনেন্ট থাকে ।

1. Entity
  1. strong entity
    **(যেটাতে প্রাইমারি আইডি থাকে ।)**
  2. weak entity
    **(যেটাতে `foreign key` যেটা অন্য entity এর উপর ডিপেন্ড করে ।)**
2. Relationships
  - **one to many and many to one many to many , etc**
3. Attribute
  - **এটা কলাম বেসড হবে এবং entity based হবে ।**




## ERD idea visualization

**এখানে যেতে হবে [https://app.diagrams.net/](#https://app.diagrams.net/)**

**কোথায় diagram সেভ করব ?** device , google drive , github  রাখা যায় 

**তারপর `Entity Relation` এ যেতে হবে ।**

## Normalalization 

- Database design technology
**Normalization অনেক প্রকার হতে পারে ।**

**1nf , 2nf , 3nf , 4nf , 5nf .... এভাবে অনেক হতে পারে ।**

- Insertion anomaly
- Update anomaly
- Delete anomaly

## 1nf 
**মানে Firest Normal form এর শর্ত হল**

**এই ডাটাবেজে `multivalues` রাখতে পারবে না । যেমন : `mongodb` array আকারে রাখতে পারি ।** 

**`primary key` থাকতে হবে ।**

## functional dependency 

**ডাটাবেজে `right side` এর ভ্যলুগুলো `same` এরং `left side` এর ভ্যলু `same` হলে তখন বুঝবো `functional dependency` আছে ।**

**functional dependency নাই কখন বুঝবো? যখন `left side and right side` সেইম না ।**

কয়েক টাইপের হতে পারে ।
- Partial Functional dependency
 এটা `composite key` এর ক্ষেত্রে কাজে লাগে ।
- Transitive Functional dependency
- Complete functional dependency


## 2nf 

## Second Normal form


## connecting postgresql

**Host name , port , username , password দিয়ে আমরা Database connect kori ..**

**127.0.0.1 বদলে localhost দেয়া থাকে । এবং port হচ্ছে 5432**

**`postgresql` ডাউনলোড করার পর আমরা  চেক করতে উইন্ডোজ start মেনুতে গিয়ে করে `psql` লিখলে `sql shell server` ওপেন করতে হবে ।**

**তারপর enter enter দিয়ে `username , password` দিয়ে connect করতে হবে ।**

## Database commands

```json
এটা ভার্শন চেক করবে ।

select version(); 

এটা ডাটাবেজ চেক করবে । backslash + l মানে লিস্ট

\l

এটা হল ডাটাবেজের সাথে `connect` হওয়া । backslash + c + database name এটা কানেক্ট করা 

\c postgres

এটা টেবিল `show` করবে । backslash + database এটা ডাটাবেজ সো করে ।

\d

এটা দিলে কয়টা ইউজার এটা দেখাবে ।  backslash + du মানে database user 

\du

এটা আগের কমান্ড কী ছিল  এটা বলে  দিবে ।

\g

এটা দিলে সব কমান্ড দেখাবে  । backslash + ? মানে স্লাশ এর পরে কী দিতে হবে এটা দেখাবে ।

\? 

এটা টার্মিনাল পরিস্কার করে দেয় । backslash + not console মানে ক্লিয়ার করা 

\! cls

এটা টার্মিনাল থেকে বের করে দেয় । backslash + quit মানে ত্যাগ করা
\q
```

## Database User Management

**start মেনুতে গিয়ে `psql` লিখলে `sql shell server` ওপেন করতে হবে ।**

**এখানে সব `enter` শুধু মাত্র `password root ` দিয়ে দিছি ।**
```
Server [localhost]:enter
Database [postgres]:enter
Port [5432]: enter
Username [postgres]:enter
Password for user postgres: root
```
**\du এটা ডাটাবেজ ইউজার গুলো দেখতে পারি ।**

**\l এটা দিয়ে লিস্ট অব ডাটাবেজ দেখতে পারি ।**
```
\du
\l
```
#### Database create command

**`create` and `database` keyword  তারপর ডাটবেজ নেম**

**তারপর অবশ্যই সেমিকোলন দিতে হবে ।**

```
create database university_management;

```
**উপরের কমান্ডটা দিলে ও কেউ এই ডাটাবেজটাকে `access` করতে পারবে না ।**

### তবে ডিফল্ট ইউজার `postgres` সব ডাটাবেজকে একসেস করতে পারবে । এটা আমরা করব না , নতুন ইউজার ক্রিয়েট করব ।

**তাই নতুন ইউজার ক্রিয়েট করব ।**

```
create user university_management with encrypted password '1234';
```
**এরপর `\du`এই কমান্ড দিলে ইউজার গুলো দেখাবে । `university management`  থাকবে কিন্তু কানেক্ট ছাড়া কিছু করতে পারবো না ।**

**এইবার নতুন ক্রিয়েট করা `database` এবং নতুন ক্রিয়েট করা `user` এর সাথে কানেক্ট করব ।=[**

**এটাকে যদি আমরা কানেক্ট করতে চাই তাহলে "**

**আমরা নতুন `shell` খুলে কানেক্ট করতে পারি ।**

```
server : localhost
database : university_management
Port : 5432
username : university_management
password : 1234
```
**কিন্ত এই ইউজার এবং ডাটাবেজ দিয়ে `table create` করতে পরব না । যেহেতু `permission` নেই ।**

```
create table users (name varchar(255) not null);
```
এটা পারমিশন দিবে না । 

### ডাটাবেজ চেন্জ 

```
মানে change

/c university_management
```
**এখন এই কমান্ড দেয়ার ফলে `default prostgress` হয়ে যাবে । যার সব একনেন আছে । এখন টৃেবিল ক্রিয়েট হবে ।**

```
create table users (name varchar(255) not null);
```

**এই ডাটাবেজের মথ্যে টেবিলের ডাটা দেখাবে ।**

```
মানে display table
\dt
```
**ডাটাবেজেক পারমিশন দিতে**

```
grant all privileges on database university_management to university_management;
```
**`user` এর পাসওয়াড ভুলে `password` change করতে**

```
alter user university_management with encrypted password '1234';
```

## Sql vs other databases

**Sql এর ইম্পিলিমেন্টেশন গুলো হচ্ছে `postgresql , mysql , oracle , microsoft sql server` ________________________________________________________________**

**sql হচ্ছে `base language` বাকি গুলো এর ইম্পিলিমেন্টেশন**

## Create Alter , Drop database 


- Database **`create` , `update` , `delete` করতে পারব**
  - table **এটা ডাটাবেজের ভিতরে থাকে আমরা `create` , `update` , `delele` করতে পারব ।**
    - Row **এটা টেবিলের ভিতরে থাকে , আমরা `read` , `create` , `update` , `delete` করতে পারব ।**
  - ? এছাড়া আরো অনেক কিছু আছে যেগুলো পরে করবো ।
  - ? 
SQL === sql এর দুইটা জিনিস আছে
  -  **Query  for example : select * from users**

  - **Command মানে কিওর্য়াড example : select , form** 

**এইবার আমরা extention ইউজ করে ডাটাবেজ অনুশীলন করব ।**

## Extention 

**Vscode এ গিয়ে `PostgreSQL by wejian chen` টা ডাউনলোড করতে হবে ।**

**এটা ডাউনলোড করার পর `Activity menu` তে দুইটা আইকন আকারে টেব আসবে । একটা  ডাটাবেজ এবং `nosql`**

**`connection ` এ ক্লিক দিতে হবে । password , username , database দিয়ে কানেক্ট করতে হবে ।**

**database create করতে আমরা প্রথমে `CREATE` কিওর্য়াড তারপর কি ক্রিযেট করতে চাই ? ডাটাবেজ -- তারপর নাম দিতে হয় ।**

**database delete করতে আমরা প্রথমে `DROP` কিওর্য়াড তারপর ডাটাবেজ কিওর্য়াড , তারপর নাম দিতে হবে ।**

**database update করতে আমরা প্রথমে `ALTER` কিওর্য়াড তারপর `DATABASE` কিওর্য়াড , কোন ডাটাবেজের নাম চেন্জ করতে চাই ? তার নাম দিতে হবে , `RENAME TO` দিতে হবে , তাবপর কী নাম দিতে চাই তারপর নাম ।**
## সর্তকতা 

**`warning` : `ctrl + shift + p`চাপ দিয়ে তারপর লিখতে হবে `reload window` তারপর `enter` দিতে হবে ।**

**ক্রিয়েট , ডিলিট , আপডেট করতে , আমরা যে ইউজার দিয়ে লগইন কররো ঐই ইউজারের পারমিশন থাকতে হবে ।**

****
USE test2 এটা postgresql এ কাজ করে না ।

```

CREATE DATABASE test2

DROP DATABASE test2;

ALTER DATABASE test2 RENAME TO test3

```
## DATATYPE IN POSTGRESS

- Datatypes
  - consistency

      **আমরা কী কী টাইপের ডাটা টাইপের ডাটা রাখতে পারি ।**
  - Validation

      ****
  - Performance
  
      ****
  - Compactness

      ****

#### postgress এ আমরা অনেক টাইপের ডাটা স্টোর করতে পারি ।
**আমরা ইম্পোরটেন্ট ডাটা টাইপ গুলো  আলোচনা করতে পারি ।**

### Datatypes 
- Boolean  **বুলিয়ানের মধ্যে দুইটা টাইপ আছে ।**
  - true 
  - false
- Character    **ক্যারেক্টারের মধ্যে তিনটা টাইপ আছে ।**
  - Char(8)    **এটাতে ক্যরেক্টটার রাখব । যেমন : `w` , `e` ইত্যাদি । এটাতে আটটা ক্যারেক্টার ডাটা রাখব । যদি আমরা দুইটা ক্যরেক্টার ডাটা রাখি বাকি মেমোরি নষ্ট হবে । এজন্য আমরা `varchar` ইউজ করি ।**



  - varchar(২৫৫)    **এটাতে `string` রাখব । যেমন : `i live in bangladesh`এখানে আমরা ২৫৫ টা ক্যরেক্টার ডাটা সেভ করতে পারব । যদিও আমরা বলে দিয়েছি ২৫৫ টা ক্যারেক্টার রাখব । এর চেয়ে যদি আমরা কম রাখি তাহলে মেমোরি নষ্ট হবে না এটা হচ্ছে সুবিধা**


  - text **এখানে বড় বড় স্ট্রিং রাখব । এটাতে কতটা ডাটা রাখব এই সিস্টেম নেই ।**

- Numbers **নাম্বারের ময্যে দুইটা ডাটা টাইপ । একটা `interge` বা পূর্ণসংখ্যা `float` বা দশমিক সংখ্যা**

  - Float 
    - Float(3) **এখানে আমরা তিন ডিজিট পর্যন্ত দশমিক সংখ্যা রাখব ।**
    - Numeric(1 , 3) **এটা দুইটা প্যারামিটার নিবো যেমন : দশমিকের আগে কয় ঘর , এবং দশমিকের পরে কয়ঘর রাখব ।**

  - integer **এখানে `integer` তিনভাবে বিভক্ত**

    - Small int  **(এটা দুই বাইটা জায়গা দখল করে ।) এটার range হচ্চে -৩২৭৬৭ থেকে ৩২৭৬৭ এখানে মাইনাস পূর্ণসংখ্যা ।**

    - Int **(এটা ৪ বাইট জায়গা মেমোরিতে জায়গা দখল করে ।) এটার রেন্জ হচ্চে -২, ১৪৭ ,৪৮৩ , ৬৪৩ থেকে ২, ১৪৭ ,৪৮৩ , ৬৪৩ পর্যন্ত ।**

    - serial **(এটা `integer` এর সমান রেন্জ ডাটা স্টোর করে বাট এটা `auto increment` হয় ।) এটা আমরা ইউজ করি ।**
- JSON **(আমরা সাধারণত `sql` ইউজ করি । `json` করি না । তবে  `json` মত আরেকটা পারফরমেন্স ভাই আছে ঐটাকে বলা হয় `jsonB`)**

- UID

- Date **তারিখ তিনভাবে বিভক্ত , `data` , `time` , `timestamp` ,`timestamp(z)`**
  - Data  **শুধু তারিখ ইউজ করব ।**

  - time **এখানে আমরা শুথু টাইম স্টোর করব**

  - timestamp **এখানে আমরা কত তারিখ , কয়টা , কত সেকেন্ড স্টোর করব ।**
  
  - timestamp(z) **এখানে আমরা `timestamp zone` হিসেবে থাকবে ।**

## create delete , update table

### create table
**প্রথমে `create` , keyword , তারপর কী ক্রয়িট করতে চাই ? `table` keyword দিতে হবে । তারপর টেবিলের জন্য নাম দিতে হবে  আমি দিলাম `studnet` । তারপর প্রথম ব্র্যাবেট `()` দিতে হবে ্**
```
create table student(

)
```
**তারপর `bracket` এর ভিতরে `columnName` , `datatype` , `constraints` দিতে হবে । `constraint` optional , বাকী গুলো mandatory । প্রথমে ডাটাটাইজ তারপর কলামনেম দিতে পারি । অসুবিধা নেই ।**

 ```
 create table student(
  name varchar(10) not null,
  firstname varchar(3) not null,
  cgpa numaric(1, 3)
 )
 ```
 ## update table
 ```
 ALTER TABLE student RENAME TO learner
 ```
## delete table 
```
DROP TABLE learner
```
## Constraints
### এই ইরর গুলো ব্যাকেন্ড ইন্জিনিয়াররা পাই ।
- Constraints 
  - Not null
  - unique
  - primary key **`primary key` এর মধ্যে `default` ভাবে দেয়া থাকে । not null , unique , index**
    - not null
    - unique
    - index
  - foreign key
  - Check constraints **এখানে  কনডিশন দেয়া যায় । এটা লিখা যায় check(cgpa > 2.4)**
## Create a table with 

**`user` table name কাজ করবে না । এটা `postgrees` er কিওয়ার্ড । এটা valid করতে `quoation` দিতে হবে ।**

**এখানে serial দেয়া হয়েছে , এটা অটো ইনক্রিমেন্ট ।**

**`primary key` তে `not null , unique` দেয়া থাকে ।**


```
Create table "user"(
  user_id serial primary key,
  user_name varchar(255) unique not null,
  email varchar(255) unique
)
```

### Composite key 
**মানে হচ্ছে দুইটা `column` মিলে `primary key` করা**

**primary key (user_id, user_name)**
```
Create table "user"(
  user_id serial,
  user_name varchar(255) unique not null,
  email varchar(255) unique,
  primary key (user_id, user_name)
)
```
### এখন আমরা চাই দুইটা `column` মিলে `unique` করতে চাইলে 

**unique (user_id, user_name)**
```
Create table "user"(
  user_id serial,
  user_name varchar(255) unique not null,
  email varchar(255) unique,
  primary key (user_id, user_name)
  unique (user_id, user_name)
)
```
**কোন টেবিলের `default` ভ্যালু দিতে চাইলে**

**age int default 18**

```
Create table "user"(
  user_id serial,
  user_name varchar(255) unique not null,
  email varchar(255) unique,
  primary key (user_id, user_name)
  unique (user_id, user_name)
  age int default 18
)
```
## insertion
**`insertion` তিনভাবে করা যায়**

**এখানে `Returning *` দেয়া মানে হচ্ছে যে `value` গুলো আমরা ইনসার্ট করছি ওগুলো রির্টান করা**

**এখানে * এর বদলে `user_id` , `user_name` দেয়া যায় ।**
```
insert into tableName (user_id, user_name) values (1, "arif") RETURNING *;
insert into tableName (user_id, user_name) values (1, "arif") RETURNING user_id;
```
**`insert` table without writing `column` name**

```
insert into tableName values (1, "arif") 
```
**`insert` মাল্টিপল `row`**

**যদি আমরা কলাম নেম না দিই তাহলে যত কলাম আছে সব কলামে ডাটা ইনসার্ট করতে হবে ।**
```
insert into tablename(user_id , user_name) 
values (1 , "arif"),
values (2 , "afif"),
values (3 , "arif");
insert into tablename
values (1 , "arif"),
values (2 , "afif"),
values (3 , "arif");
```
## Selection
```
select * form user1
```
## Delete row without deleting table

```
Drop table user1
TRUNCATE TABLE user1
```

## Alter table

**আমরা টেবিল বা `schema` করলাম হতে পারে যে ওই টেবিলে আরেকটা নতুন `column add` করতে হচ্ছে ।**

**`schema` এর মধ্যে নতুন কলাম এড করা ।**

**নতুন `constraint` করা লাগতে পারে ।**

**নিচে আরেকটা `column` এডড করা হয়েছে ।**

**প্রথমে `alter` , `table` , তারপর টেবিলের নাম দিতে যে টেবিলে এড করতে চাই ।**

**তারপর `add column` keyword . তারপর কলামের নাম ।**

**তারপর `datatype` , তারপর `constraint`**

```
Alter table user1 add column password varchar(255) default 'admin123' not null

Alter table user1 add column demo int

```
**delete table column**

```
Alter table user1 drop column age;
```
**যদি এমন হয় কলাম আছে কিন্ত টাইপ চেন্জ করতে হবে ।**


**`demo` আগে ছিল ইনটিজার টাইপ এখন এটাকে `text` টাইপ করবো ।**

```sql
Alter table user1 add column demo int;

Alter table user1 
   Alter column demo type text;
```

**set default value existing column in table**
```sql
Alter table user1 
   Alter column demo set default "bangladesh";
```
**remove Default value existing column in table**
```sql
Alter table user1 
   Alter column demo drop default ;
```

**rename column**

```sql
ALTER  TABLE user1 RENAME COLUMN demo to country;
```
**add constraint in existing column**

```sql
Alter table user1 
   Alter column country set not null ;
```
**add constraint in exiting coloumn**
```sql
Alter table user1 
   Add constraint country ;
```
## Foreign key Constraint and Data integrity
**এখানে আগে `department` টেবিল ক্রিয়েট করতে হবে ।**

```sql
create table department (
    deptID SERIAL PRIMARY KEY,
    deptName VARCHAR(50)
);
```

**তারপর `employee` টেবিল ক্রিয়েট করতে হবে ।**

**`constraint` হচ্ছে বাধা যা `department` টেবিলে ডাটা ইনসার্ট করলে তারপর `employee` ডাটা ইনসার্ট করতে দিবে ।**

    CONSTRAINT fk_constraint_dept
       FOREIGN KEY (departmentId)
       REFERENCES department(deptID)

**উপরের তিনটা লাইন হচ্ছে একটা লাইনে লিখতে হবে । `constraint` যেকোন কিছু দেয়া যায় । `foreign key(departmentid)`এর ভিতরে টা যেখানে আইডি রাখব ঐই কলামের নামে দিতে হবে ।**


**এরপরে Referces এর ভিতরে কোন টেবিলের আইডি রাখব এটা বলে দিতে হবে ।**
```sql

 departmentId INT,
    CONSTRAINT fk_constraint_dept
       FOREIGN KEY (departmentId)
       REFERENCES department(deptID)
```
```sql
create table Employee (
    empId SERIAL PRIMARY KEY,
    empName VARCHAR(50) NOT NULL,
    departmentId INT,
    CONSTRAINT fk_constraint_dept
       FOREIGN KEY (departmentId)
       REFERENCES department(deptID)
);
```
## Insert data with foreign keys data
**ইনসাট করতে প্রথমে department ডাটা ইনসাট করতে হবে ।**
```sql
insert into department values (1, "It)
```
**তারপর `employee` ডাটা ইনসার্ট করতে হবে । যদি আমরা order change করি তাহলে ইরর দিবে**
```sql
insert into employee values (1, "arif", 1)
```
## delete data with foreign key
```sql
Delete form dependent where deptID  = 1;
```
**এই ডিলিটা করতে দিবে না । বলবে তার মানে এটাকে ডিলিট করতে দিবে না ।**

**`employee` table এ `departmentid `, ডাটা খোজার সময় `invalid` হয়ে যেতে পারে  ।**

```sql
update or delete on table dependent violates foreign key fk_constraint on table 'employee' 
```
**এজন্য আগে `employee` delete করতে হবে  । আথবা `foreign key` null করতে হবে।**
**`delete` এর ক্ষেত্রে আগে যে টেবিলে ‌‌`foreign key` আছে ওইটা ডিলিটা করতে হবে ।**

```sql
delette form employee where empld = 1
এরপরে দিব
Delete form dependent where deptID  = 1;
```
**এখানে `data integrety` আনেক high থাকে । যেইটা `nosql` নেই ।**



## Insertion and deletion




## ডাটা ইনসার্ট করা
**মনে রাখতে হবে ডাটা ইনসাট করার ক্ষেত্রে varchar গুলো `single notatiion` ব্যবহার করতে হবে ।**

**আবার `sql` , `nosql` এর ক্ষেত্রে `date` সবক্ষেত্রে `yyyy-mm-dd` মানে আগে বছর তারপর মাস এবং দিন থাকবে ।**
```sql
DROP TABLE courses;
CREATE TABLE courses (
    coursesID SERIAL PRIMARY KEY ,
    coursesName VARCHAR(255) NOT NULL ,
    description VARCHAR(255),
    pulicationDate DATE
);
SELECT * FROM courses;
TRUNCATE TABLE courses;
INSERT INTO courses(coursesname, description , pulicationdate)
VALUES
  ('prostgress for development', 'A complete postgress for developter', '2020-08-04'),
  ('prostgress administration', 'A postgress guide for dna' , '2020-08-05'),
  ('prostgress for high performance', 'A complete postgress for developter', '2020-08-04'),
  ('prostgress bootcamp', 'A postgress guide for dna' , '2020-08-05'),
  ('prostgress for mastering', 'A complete postgress for developter', '2020-08-04');

```
## Update data
**আমরা আপডেট `single row` এবং `multiple row` আপডেট করতে পারি ।**

**এক্ষেত্রে মনে রাখতে হবে**

**আমরা কোন টেবিলে আপডেটা করতে চাই?**

**ঐই টেবিলের কোন কলামে আপডেট করতে চাই ?**

**এবং কোন `row` তে আপডেট করব ? এটা বলো দিতে হয় ।**

```sql
Update table name 
SET 
column1 = value,
column = value,
where condition
```
```sql
update course
set
course_name = 'course for mongodb'
where course_id = 1;
```
## Delete data 
```sql
delete from course
where course_id = 1;
```
## Select basic

**`if not exists` এর ব্যবহার যেমন : এটা টেবিল create করা থাকলে ও কুয়েরি `execute` হবে ।** 

```sql
create table if not exists department (
    deptID SERIAL PRIMARY KEY,
    deptName VARCHAR(50)
```

**সিলেক্ট আল কালাম**
‌‌‌

```sql
select * from courses
```

**সিলোক্ট ১ টা কালাম , ২টা কালাম  যেকোনো**
```sql
select course_id , course_name from courses
```
### select using where clause

```sql
Select * from courses where course_id = 1;
SELECT * from courses where joining_date > '2020-02-01';
```sql
### select data using `not equal sign` <> এটা নট equal
```sql
select * from courses where name <> 'eve'
SELECT * FROM Employees WHERE name <> 'john Doe' AND salary > 70000 OR name  = 'Jane Smith';

```

## Sort limit and offset

## Sort

**`SELECT * FROM employees` এটা হচ্ছে base query**

**কোন কলামের উপরে আমরা `order` করতে চাই ? এজন্য `order by` keyword দিতে হবে । তারপর কলামের নাম দিতে হবে**

**কলামের নাম দেয়ার পরে আমরা কী অডারে চাই `asc` নাকী `desc`**

```sql
SELECT * FROM employees order by name DESC;
```

## pagination or limit and offset


**এখানে আমরা নেমকে `ascending` আকারে তিনটা লিমিটা করে দিয়েছি ।**

**এবং `offset=1` দিয়েছি । বাই ডিফল্ট `offset = 0` মানে প্রথম তিনটা ডাটা দিবে ।**

**আর `offset = 1` দিলে দিতীয় তিনটা দিবে ।**

**তবে `mysql` এ `offset` দিতে হয় না ।**

```sql
select * from employees order by name asc limit 3 offset 1
```
### Hightest selary from employee
**এখানে আমরা `selary` কে অর্ডার করলাম এবং খেয়াল করে দেখুন , `desc` করলাম । তাই বড় সংখ্যাটি থেকে ছোট সংখ্যা দেখাচ্ছে । তারপর নিচে `limit 1` দিয়েছি যার কারণে hightest salary দেখাচ্ছে ।**


**যদি আমরা তৃত্বীয়তম সেলারি বের করতে চাই , তাহলে নিচের সব কিছু ঠিক আছে কিন্তু `offset = 1` দিতে হবে ।**
```sql
select * from employee order by selary desc limit 1
```
## Explore More Select And Like operator

**`Select` কুয়েরী টা শেষ নেই ।**

## IN and not in

### আমরা `multiple data exclude` এবং `multiple data include` করতে পারি ।

**কখন আমরা `in` ব্যবহার করব ?**

**সাধারণত আমরা `where empid = 1` দিয়ে একটা সার্চ করতে পারি । কিন্তু এমন হতে পারে যে আমরা দুইটা তিনটা আইডি সার্চ করতে পারি**

```sql
SELECT * FROM Employees WHERE empid IN (11, 13 , 14 , 15);
UPDATE Employees SET salary = 1000 WHERE empid IN (13 , 15);
```
**আমরা চাই কয়েকটা `empid` ছাড়া বাকী সব ডাটা চাই ।**

```sql
select * from Employees where empid not in (2 , 3, 5 , 8)
```
## Between
`Between` এর মাধ্যমে `range` কাজ করতে পারি । 
```sql
select * from Employees where salary BETWEEN 1000 AND 60000;ঝ
```
## Like
**আমরা `Like` কিওয়ার্ড দিয়ে `String search` করতে পারি ।**

**এখানে নামের ভিতরে মাঝখানে শুরুতে এবং শেষে সার্চ করতে পারি ।**

**আর এটা `case sensetive` সার্চ করে ।**
```sql
select * from Employees where name LIKE '%J%';
select * from Employees where name LIKE '%J';
select * from Employees where name LIKE 'J%';
```

## Specific position in string

**আমরা যদি সেকেন্ড পজিশনে একটা ক্যারেক্টার সার্চ করি তাহলে**

**আর যদি তিনটা ক্যারেক্টারের পরের সার্চ করতে চাই তাহলে দুইটা আন্ডারস্কোর দিতে হবে ।**

**আবার প্রথমে `J` আছে এবং শেষে `e` আছে । মাঝখানে যা আছে থাকুক এটা সার্চ করা যায় ।**

```sql
select * from Employees where name LIKE '_a%';
select * from Employees where name LIKE '__a%';
// এটা প্রথম দিকে ছয় ঘর আর শেষ দিকে ঘর সার্চ করছি ।
select * from Employees where name LIKE '______o_';
select * from Employees where name LIKE 'J%h';
```
## Null Searching
**যেগুলো নাল ঐগুলো `searching` করা ।**
```sql
select * from Employees where name IS NULL
```

## Joining table

**রিলেশনাল ডেটাবেজ ম্যানেজ করার জন্যে SQL অত্যন্ত পাওয়ারফুল একটি ল্যাংগুয়েজ। SQL এর একটি ফান্ডামেণ্টাল অপারেশন হচ্ছে JOINING । এর আগে আমরা জেনেছি Normalization কি , এটার কি প্রয়োজন এবং কিভাবে আমরা একটা ডেটাবেজে Normalization ব্যাবহার করতে পারি। আজকে আমরা এই ব্লগে জানবো কিভাবে SQL Join কে ব্যাবহার করে আমাদের ডেটাবেজ ম্যানেজ করতে পারি।**

***

**Normalization এর ক্ষেত্রে আমরা কি করেছি কারও কি মনে আছে?**



**একটা ডেটাবেজের redundancy বা repeatation কমানোর জন্য আমরা একটা বড় টেবিল কে ছোট ছোট টেবিলে ভাগ করে ফেলি । এর ফলে আমাদের ডেটাবেজে ডেটা আপডেট , ক্রিয়েট , ডিলেট করতে সুবিধা হয়।**

**সহজ ভাষায় যদি এটা আপনার উত্তর হয় তাহলে অভিনন্দন! আপনি সঠিক !

**Normalization এ আমরা যেখানে আমরা একটা ডেটাবেজ কে ছোট ছোট টেবিলে ভাগ করে ফেলি, Joining এ আমরা ঠিক উল্টোটা করি। অর্থাৎ ভাগ করা টেবিলগুলোকে আমরা আবার একসাথে জয়েন করে ফেলি JOIN এর মাধ্যমে।**

<br>
<br>


কি সমস্যা ভাই? একবার Normalization দিয়ে আলাদা করেন। আরেকবার একসাথে করে ফেলেন Joining এর মাধ্যমে!
চিল ভাই। প্যারা নাই । কেন করছি সেটা বলছি।
আমি আগে একবার বলেছি যে আমাদের বড় ডেটাবেজে যাতে সহজে ডেটা আপডেট , ইনসার্ট , এবং ডিলেট করতে পারি তার জন্যই আমরা Normalization এপ্লাই করেছি। কিন্তু আপনি যখন একটা ডেটাকে খুঁজে বের করতে যাবেন তখন আপনাকে সেই ডেটার সাথে কানেক্টেড ডেটার রিলেশনাল টেবিল গুলোকেও বের করে আনতে হয়। অর্থাৎ একটা যদি স্টুডেন্ট টেবিল হয় এবং আরেকটা যদি কোর্স টেবিল হয়, তাহলে একজন স্টুডেন্ট কোন কোর্সটা করছে সেটা জানার জন্যে আপনাকে কোর্সের টেবিলকে স্টুডেন্ট টেবিলের সাথে জয়েন করা লাগবে। আর এই জিনিসকেই সহজ ভাষায় বলা হয় JOINING ।
চলুন হালকা করে আমরা SQL JOINING এর সংজ্ঞাটা দেখে নেই

<br>
<br>

**A JOIN clause is used to combine rows from two or more tables, based on a related column between them.**

**অর্থাৎ JOIN এর মাধ্যমে আমরা ২ বা তার অধিক টেবিলের মধ্যে row গুলোকে combine করতে পারি একটি কমন কলামের **সাহায্যে।**

**ভাই এসব সংজ্ঞ্যা তো মাথায় ঢুকে না। কিছু উদাহরণ দেন ।**

অবশ্যই ভাই ! তবে তার আগে আমাদের জানা দরকার SQL এ কয় ধরনের জয়েন রয়েছে।


1. **INNER JOIN / JOIN**
2. **LEFT OUTER JOIN**
3. **RIGHT OUTER JOIN**
4. **FULL JOIN**
5. **NATURAL JOIN**
6. **CROSS JOIN**


চলুন হালকা করে প্রত্যেকটার উদাহরণ থেকে বুঝে নেই ।

<br>

## INNER JOIN / JOIN ==== 

<br>
<br>


চিন্তা করুন আপনার কাছে দুটি বাক্স আছে । একটা বাক্সে আছে আম, জাম, কাঠাল , লিচু এবং আরেকটি বাক্সে আছে পেয়ারা , পেঁপে , আম , কাঁঠাল। আপনি যদি এই দুটি বক্স কে JOIN করে বা INNER JOIN করেন তাহলে আপনি যে ফল গুলো পাবেন সেগুলো হচ্ছে আম এবং কাঁঠাল। অর্থাৎ দুটি বক্সের মধ্যে কমন যেসকল ফল রয়েছে সেগুলো পাবেন আপনি। সহজ ভাষায় এটাকেই বলে INNER JOIN বা এক কোথায় জয়েন
এবার চলুন আমরা একটু SQL এর ভাষায় চিন্তা করি।

<br>


ধরুন দুটি টেবিল আছে।

**CUSTOMER TABLE:**

| customer_id | customer_name |
|-------------|---------------|
| 1           | Abul          |
| 2           | Kabul         |
| 3           | Rakibul       |
| 4           | Sakibul       |


**ORDER TABLE:**

| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |



এই দুইটা টেবিল কে যদি আমরা INNER JOIN করি তাহলে টেবিল টা দেখতে কেমন হবে?

| order_id | customer_id | customer_name |
|----------|-------------|---------------|
| 1        | 2           | Kabul         |
| 2        | 3           | Rakibul       |
| 3        | 2           | Kabul         |
| 4        | 2           | Kabul         |

<br>

**অর্থাৎ এখানে আমরা `ORDER TABLE` এর সাথে `CUSTOMER TABLE` কে জয়েন করেছি এবং `ORDER TABLE` এর যে Row গুলোর `customer_id` এর সাথে `CUSTOMER TABLE` এর যে Row গুলোর `customer_id` ম্যাচ করবে শুধু সেগুলোই দেখাবে।**



এটার SQL Query টা দেখতে এরকম হত

```sql
SELECT CUSTOMER.customer_name, ORDER.order_id
FROM CUSTOMER
INNER JOIN ORDER ON CUSTOMER.customer_id = ORDER.customer_id;

```
## where and on

**এখানে `on` ইউজ করতে পারব, `where` দিলে syntex error হবে ।, `join column` ক্ষেত্রে `on` ইউজ করব , `filter` এর ক্ষেত্রে `where` ইউজ করব ।**

```sql
select * from Employees as e
LEFT JOIN department as d ON d.deptid = e.deptid;

উপরে জয়েন টেবিল করে যে ডাটা পেয়েছি সে ডাটা থেকে সে ডাটা থেকে `filter` করার জন্য নিচে `where` ইউজ করা হয়েছে ।

select * from Employees as e
LEFT JOIN department as d ON d.deptid = e.deptid WHERE name LIKE '%J%';
```


এটাকেই আমরা বলছি INNER JOIN / JOIN . কত্ত সহজ তাইনা!

## LEFT OUTER JOIN / LEFT JOIN ====:

<br>
<br>


**এখানে `left join` এর প্রায়োরিটি বেশি । `left` টেবিলের সব ডাটা দেখাবে । কিন্তু `right` টেবিলের `id` এর সাথে যেগুলো মিলবে না ওইগুলো `null` দিবে ।**

**`left join` এ টেবিলে বাম টেবিলের `priority` বেশি । এখানে বাম পাঁশের বাক্সের গুরত্ব অপরিসীম**



**চলুন আবার আমাদের ফলের বাক্সে ফিরে যাই। আমাদের ২ টা ফলের বাক্স কে এবার আমরা একটু দুই সাইডে সরিয়ে দেই। যেই বাক্সে আম, জাম, কাঠাল , লিচু আছে সেই বাক্স কে বামে রেখে দেই । আর যেই বাক্সতে পেয়ারা , পেঁপে , আম , কাঁঠাল আছে সেটাকে ডানে রেখে দিলাম।** 


**এবার যদি বাম পাঁশের বাক্সের সাথে ডান পাঁশের বাক্সকে আমরা LEFT JOIN করতাম তাহলে শুধু কি কি ফল পেতাম?**


দুইটা আম পেতাম, একটা জাম পেতাম , দুইটা কাঁঠাল পেতাম , এবং একটা লিচু পেতাম **

**অর্থাৎ দুটি বাক্সের মধ্যে কমন ফল গুলো পেতাম এবং এছাড়াও বাম পাঁশের বাক্স তে যেই ফল গুলো ডান পাঁশের বাক্সের সাথে কমন নয় বা মিলবেনা সেগুলাও পেতাম। অর্থাৎ এখানে বাম পাঁশের বাক্সের গুরত্ব অপরিসীম!**


এটাকে একটু SQL এর ভাষায় চিন্তা করা যাক।

**CUSTOMER TABLE:**
| customer_id | customer_name |
|-------------|---------------|
| 1           | Abul          |
| 2           | Kabul         |
| 3           | Rakibul       |
| 4           | Sakibul       |

**ORDER TABLE:**
| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |



এখানে CUSTOMER TABLE কে বাম পাঁশে রেখে এবং ORDER TABLE কে ডান পাঁশে রেখে যদি দুটির মধ্যে LEFT JOIN করা হয় তাহলে Table টি দেখবে যেমন হবে


| customer_name | order_id |
|---------------|----------|
| Abul          | NULL     |
| Kabul         | 1        |
| Kabul         | 3        |
| Kabul         | 4        |
| Rakibul       | 2        |
| Sakibul       | NULL     |



এখানে দেখতে পাচ্ছি Abul এবং Sakibul যেহেতু কোন order করেনি তাই তাদের order_id NULL এসেছে। এটার কারণ হচ্ছে যেহেতু আমরা CUSTOMER টেবিল কে বামে রেখেছি তাই এখানে CUSTOMER Table এর priority বেশি। তাই যেসব customer অর্ডার করেছে তাদের তো দেখাচ্ছেই, সাথে যারা অর্ডার করেনি তাদের কেও দেখাচ্ছে।

এটাকে SQL Query তে লেখলে এরকম হত

```sql
SELECT CUSTOMER.customer_name, ORDER.order_id
FROM CUSTOMER
LEFT JOIN ORDER ON CUSTOMER.customer_id = ORDER.customer_id;
```

চলুন এবার RIGHT OUTER JOIN টা ঝটপট দেখে ফেলি!


## RIGHT OUTER JOIN / RIGHT JOIN =====

<br>
<br>

**এখানে `right join` এর প্রায়োরিটি বেশি । right টেবিলের সব ডাটা দেখাবে । কিন্তু `left` টেবিলের `id` এর সাথে যেগুলো মিলবে না ওইগুলো `null` দিবে ।**



LEFT JOIN থেকেই আমরা এখন হালকা পাতলা আন্দাজ করতে পারছি RIGHT JOIN এ কি হতে পারে। RIGHT JOIN এর LEFT JOIN এর সম্পুর্ণ উল্টো টা হবে । অর্থাৎ LEFT JOIN এর ক্ষেত্রে বাম পাঁশের টেবিলের বেশি গুরুত্ব ছিল। আর RIGHT JOIN এর ক্ষেত্রে ডান পাঁশের টেবিলের গুরুত্ব বেশি থাকবে ।

<br>
<br>

চলুন আমাদের ফলের বাক্স গুলোকে আবার ধরে নিয়ে আসি।

এবারও আমরা যেই বাক্সে আম, জাম, কাঠাল , লিচু আছে সেই বাক্স কে বামে রেখে দেই । আর যেই বাক্সতে পেয়ারা , পেঁপে , আম , কাঁঠাল আছে সেটাকে ডানে রেখে দিলাম। এবার যদি বাম পাঁশের বাক্সের সাথে ডান পাঁশের বাক্সকে আমরা RIGHT JOIN করতাম তাহলে শুধু কি কি ফল পেতাম?
<br>
<br>

১ টা পেয়ারা , ১ টা পেঁপে, ২ টা আম , এবং ২ টা কাঁঠাল

অর্থাৎ ডান পাঁশের বাক্সের সাথে বাম পাঁশের বাক্সের যেসব ফল কমন সেগুলো তো পাবই সাথে ডান পাঁশের অন্য ফলগুলো সেগুলো বাম পাঁশের বাক্সে নেই সেগুলাও পেয়ে যাবো ।


চলুন আবার আগের মত একবার SQL এর ভাষায় দেখে ফেলি

**CUSTOMER TABLE:** এটা বাম টেবিল ।

| customer_id | customer_name |
|-------------|---------------|
| 1           | Abul          |
| 2           | Kabul         |
| 3           | Rakibul       |
| 4           | Sakibul       |

**ORDER TABLE:**  এটা ডান টেবিল

| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |



**এখানে CUSTOMER TABLE কে বাম পাঁশে রেখে এবং ORDER TABLE কে ডান পাঁশে রেখে যদি দুটির মধ্যে RIGHT JOIN করা হয় তাহলে Table টি দেখবে যেমন হবে**

| customer_name | order_id |
|---------------|----------|
| Kabul         | 1        |
| Rakibul       | 2        |
| Kabul         | 3        |
| Kabul         | 4        |


**এই ক্ষেত্রে দেখতে পাচ্ছি যেসব কাস্টোমারের কোন অর্ডার নেই তাদের কে টেবিলে রাখা হয়নি। অর্থাৎ ডান পাঁশের টেবিল কে এখানে বেশি priority দেওয়া হয়েছে।**

এটাকে SQL Query তে লিখলে এরকম হবে

```sql
SELECT CUSTOMER.customer_name, ORDER.order_id
FROM CUSTOMER
RIGHT JOIN ORDER ON CUSTOMER.customer_id = ORDER.customer_id;
```

আমরা সাধারণত এই ৩ ধরনের JOINING গুলোই করে থাকি। এছাড়াও আরও কিছু ধরনের JOINING আছে। চলুন সেগুলো নিয়ে আলোচনা করা যাক!


## FULL JOIN ====

**এখানে `left outer join` and `right outer join` এর `behevior` দখাবে ।**

**আগের JOINING গুলো থেকে FULL JOIN টা খুবই সহজ। এই ক্ষেত্রে আমরা যদি দুটি ফলে বাক্স কে ফুল জয়েন করি তাহলে দুটি বাক্সের সব গুলো ফলই আমরা পাবো । অর্থাৎ দুটি বাক্সকে FULL JOIN এর পরে আমরা আম, জাম, কাঁঠাল, লিচু , পেয়ারা, পেঁপে সব গুলো ফলই পেয়ে যাবো ।**


**এটাকে SQL এর ভাষায় চিনতা করলে এরকম হবে ।**
**CUSTOMER TABLE:**

| customer_id | customer_name |
|-------------|---------------|
| 1           | Abul          |
| 2           | Kabul         |
| 3           | Rakibul       |
| 4           | Sakibul       |

**ORDER TABLE:**

| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |


**এই দুটি টেবিলকে FULL JOIN করলে এরকম হবে ।**
| customer_name | order_id |
|---------------|----------|
| Abul          | NULL     |
| Kabul         | 1        |
| Kabul         | 3        |
| Kabul         | 4        |
| Rakibul       | 2        |
| Sakibul       | NULL     |



এই ক্ষেত্রে দেখতে পাচ্ছি যেসব **কাস্টোমারের কোন অর্ডার নেই সেগুলাও টেবিলে চলে আসছে। অর্থাৎ দুটি টেবিলের মধ্যে কমন এবং আনকমন যত ডেটা আছে সব চলে এসেছে।**

**এটার SQL Query টা দেখতে যেমন হবে**

```sql
SELECT CUSTOMER.customer_name, ORDER.order_id
FROM CUSTOMER
FULL JOIN ORDER ON CUSTOMER.customer_id = ORDER.customer_id;
```

তাহলে বোঝাই যাচ্ছে FULL JOIN অন্যান্য JOINING এর থেকে অনেক সহজ, সরল এবং সিম্পল! চলুন এবার NATURAL JOIN কি সেটা এক নজরে দেখে ফেলি।


## NATURAL JOIN ====

**এটা `inner join` এর মতো , যে গুলো মিলবে ওইগুলো দেখাবে । সিনট্যক্সের ক্ষেত্রে ‌`inner join` এর পরিবর্তে `natural join`**

NATURAL JOIN এর ক্ষেত্রে কমন ডেটা গুলো নিয়ে একটা টেবিল তৈরি হয়। এটাকে দেখতে অনেকটা INNER JOIN এর মতই । তবে কিছুটা তফাত আছে।

<br>
<br>

তবে যদি আমরা আগের মত আমাদের ফলের বাক্স গুলোর কথা চিন্তা করি তাহলে এই ক্ষেত্রেও আমরা আগের INNER JOIN এর মতই দুটি বাক্সের মধ্যে কমন ফলগুলো পাব। যেমন আম এবং কাঁঠাল। তবে এই ক্ষেত্রে আমাদের INNER JOIN এর মত বলে দিতে হয় যে তুমি কিসের সাথে কিসের ম্যাচ করবে। অর্থাৎ INNER JOIN এর ক্ষেত্রে আমাদের বলে দিতে হয়েছিল যে দুটি বক্সের মধ্যে যে ফলগুলো আছে শুধু সেগুলোর মধ্যেই তুমি ম্যাচ খুঁজে বের করে আমাকে কমন ফল গুলো বের করে দাও । কিন্তু NATAURAL JOIN এর ক্ষেত্রে আমাদের এটা বলে দিতে হয় না। তার মানে যদি বক্সের মধ্যে ফলের পাশাপাশি সবজি বা অন্য কিছুও থাকতো তাহলে আমরা কমন সবজিগুলও পেয়ে যেতাম । INNER JOIN এর ক্ষেত্রে আমাদের বলে দেওয়া লাগতো যে ফল এবং সবজি দুটোর মধ্যেই ম্যাচ করা ফল বা সবজি গুলো বের করে দাও।

<br>
<br>


এবার আমরা একটু আমাদের পুরনো টেবিল গুলোর দিকে তাকাই।
**CUSTOMER TABLE:**
| customer_id | customer_name |
|-------------|---------------|
| 1           | Abul          |
| 2           | Kabul         |
| 3           | Rakibul       |
| 4           | Sakibul       |

**ORDER TABLE:**
| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |



এই দুটি টেবিলের মধ্যে NATURAL JOIN করলে এরকম দেখাতো
**CUSTOMER-ORDER TABLE**
| order_id | customer_id | customer_name |
|----------|-------------|---------------|
|          | 1           |               |
| 1        | 2           | Kabul         |
| 2        | 3           | Rakibul       |
| 3        | 2           | Kabul         |
| 4        | 2           | Kabul         |


এই টেবিলটা কে দেখে কিন্তু বোঝার উপায় নেই যে এটা INNER JOIN নাকি NATURAL JOIN। তবে এটার SQL Query টা যদি দেখি তাহলে তফাত টা ধরতে পারব
```sql
SELECT customer_name, order_id
FROM CUSTOMER
NATURAL JOIN ORDER;
```


**এখানে NATURAL কমান্ডটা তো আছেই , কিন্তু এটা ছাড়াও আরেকটি তফাত হচ্ছে এখানে আমরা কোন condition দেইনি যে CUSTOMER TABLE এর কোন ফিল্ডের সাথে ORDER TABLE এর /co**


```sql
SELECT CUSTOMER.customer_name, ORDER.order_id
FROM CUSTOMER
INNER JOIN ORDER ON CUSTOMER.customer_id = ORDER.customer_id;
```

**তাহলে ভাই INNER JOIN ভালো নাকি NATURAL JOIN ভালো ?INNER JOIN টাই ভালো। কারণ এই ক্ষেত্রে আমাদের হাতে কন্ট্রোল বেশি।** NATURAL JOIN এর ক্ষেত্রে একটা risk থেকে যায়। আর তা হল , যদি দুটি টেবিলের ফিল্ডের নাম এক না হয় তাহলে NATURAL JOIN এর থেকে ভুলভাল result আসবে । একটু ব্যাপার টা আমরা ভিজুয়ালাইজ করি ।


**CUSTOMER TABLE:**
| id | customer_name |
|----|---------------|
| 1  | Abul          |
| 2  | Kabul         |
| 3  | Rakibul       |
| 4  | Sakibul       |

**ORDER TABLE:**
| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |


এই ক্ষেত্রে আমরা CUSTOMER TABLE এর customer_id field এর নাম পরিবর্তন করে id দিয়ে দিয়েছি । আর ORDER TABLE এ customer_id ফিল্ড কে আগের মতি রেখেছি। এই ক্ষেত্রে যদি আমরা NATURAL JOIN করতে যাই তাহলে কোন ডেটা দিতে পারবে না কারণ এখানে কাস্টোমার টেবিলের কোন ফিল্ডের নামের সাথে অর্ডার টেবিলের কোন ফিল্ডের নামের মিল নেই।
তাই বোঝাই যাচ্ছে INNER JOIN কেন NATURAL JOIN থেকে better.


## CROSS JOIN ====

**ক্রস জয়েনের ক্ষেত্রে আমাদের সবার মাথা আউলায় যায় তাইনা? এটা অন্য জয়েনিং গুলোর থেকে একটু কমপ্লিকেটেড । চলুন তাহলে এটাকে আমরা সহজ সরল সিম্পল ভাবে বোঝার চেষ্টা করি।**

ধরা যাক আমাদের আগের দুইটা ফলের বাক্স আছে। এবার আমাদের বাক্স গুলো একটু ম্যাজিক দেখাবে। অর্থাৎ দুইটা বাক্স কে জয়েন করে , আমাদের প্রতিবার দুটি করে ফল দিবে। **আমাদের একটি বাক্সে আমরা রাখলাম আপেল এবং কমলা, এবং আরেকটি বাক্সে রাখলাম আম এবং লিচু ।**

এই দুটি বক্স কে আমরা CROSS JOIN করলে প্রতিবার যে দুটি ফল পাবো সেগুলো হচ্ছে

- আপেল এবং আম
- আপেল এবং লিচু
- কমলা এবং আম
- কমলা এবং লিচু

**অর্থাৎ প্রতিবার বাম পাঁশের বাক্সের একটা ফল এবং ডান পাঁশের বাক্সের একটা ফল মিলে মোট দুটি ফল পাচ্ছি।**


যদি SQL ভাষায় চিন্তা করি তাহলে যেমন 

**CUSTOMER TABLE:**

| customer_id | customer_name |
|-------------|---------------|
| 1           | Abul          |
| 2           | Kabul         |
| 3           | Rakibul       |
| 4           | Sakibul       |

**ORDER TABLE:**

| order_id | customer_id |
|----------|-------------|
| 1        | 2           |
| 2        | 3           |
| 3        | 2           |
| 4        | 2           |



**CUSTOMER TABLE এবং ORDER TABLE কে যদি CROSS JOIN করি তাহলে টেবিল টা দেখতে এরকম হবে।**

| customer_id | customer_name | order_id | customer_id |
|-------------|---------------|----------|-------------|
| 1           | Abul          | 1        | 2           |
| 1           | Abul          | 2        | 3           |
| 1           | Abul          | 3        | 2           |
| 1           | Abul          | 4        | 2           |
| 2           | Kabul         | 1        | 2           |
| 2           | Kabul         | 2        | 3           |
| 2           | Kabul         | 3        | 2           |
| 2           | Kabul         | 4        | 2           |
| 3           | Rakibul       | 1        | 2           |
| 3           | Rakibul       | 2        | 3           |
| 3           | Rakibul       | 3        | 2           |
| 3           | Rakibul       | 4        | 2           |
| 4           | Sakibul       | 1        | 2           |
| 4           | Sakibul       | 2        | 3           |
| 4           | Sakibul       | 3        | 2           |
| 4           | Sakibul       | 4        | 2           |


এটার SQL Query টা একদম সহজ!
```sql
SELECT *
FROM CUSTOMER
CROSS JOIN ORDER;
```


আচ্ছা ভাই CROSS JOIN আমাদের কাজে লাগে?
মূলত large database এর মধ্যে ডেটা এনালাইসিস করা জন্যে এই ধরনের CROSS JOIN করা হয়। এছাড়াও অনেক ক্ষেত্রে যেমন একটা ইকমার্স প্ল্যাটফর্মের প্রডাক্ট ক্যাটালগ জেনারেট করার জন্যেও এই ধরনের CROSS JOIN ব্যাবহার করা হয়। তবে মজার বিষয় হচ্ছে আমরা সচরাচর এই ধরনের জয়েনিং ব্যাবহার করি না।

<br>
<br>
<br><br>
<br>

SQL JOINING আমাদের ডেটা খুঁজে বের করে READ করার জন্যে খুবই পাওয়ারফুল একটি পদ্ধতি । CREATE, UPDATE, DELETE এর ক্ষেত্রে যেন আমাদের সুবিধা হয় সেই জন্যে যেন আমরা NORMALIZATION পদ্ধতি এপ্লাই করেছি। ঠিক একই ভাবে ডেটা READ করার জন্যে আমাদের JOINING করতে হয়। অর্থাৎ আমরা আমাদের প্রয়োজন অনুযায়ী ডেটাবেজের মধ্যে যেকোনো ধরনের কাটাছেড়া করে সেটাকে আবার জোড়া লাগিয়ে আমাদের প্রয়োজনীয় ডেটা খুঁজে আনতে পারি JOIN এর মাধ্যমে। SQL JOIN এর উপর আমদের হাত পাকা করতে প্রচুর প্রচুর Query লিখে প্র্যাকটিস করতে হবে। তাহলেই আমরা হতে পারবো SQL SUPERSTAR! শুভকামনা রইল!



## Aggregate Functions

---

**ডেটা ম্যানেজমেন্ট এবং ম্যানিপুলেশনের ক্ষেত্রে, এসকিউএল (স্ট্রাকচার্ড কোয়েরি ল্যাঙ্গুয়েজ) একটি অপরিহার্য টুল হিসেবে দাঁড়িয়েছে।** আপনি একজন ডেটা বিশ্লেষক, একজন পেশাদার ব্যবসায়ি বা একজন সফ্টওয়্যার ডেভেলপার হোন না কেন, SQL এর সূক্ষ্মতা বোঝা আপনাকে বিশাল ডেটাসেট থেকে অর্থপূর্ণ তথ্য বের করার ক্ষমতা দিতে পারে।
এই ব্লগ পোস্টে, আমরা দুটি শক্তিশালী SQL ধারণার পিছনের যাদুটি উন্মোচন করার জন্য একটি যাত্রা শুরু করব। এগুলি হচ্ছে Aggregate Functions এবং Subqueries এই টুলগুলি আমাদেরকে অপরিশোধিত ডেটাকে কার্যকরী তথ্যে রূপান্তর করতে সুপার পাওয়ার প্রদান করে।

#### AGGREGATE FUNCTIONS: UNVEILING HIDDEN PATTERNS

কল্পনা করুন আপনার কাছে একটি কোম্পানির পণ্যের বিক্রয় তথ্য সম্বলিত একটি বিশাল ডেটাসেট আছে। **আপনি উৎপন্ন মোট আয়, গড় বিক্রয়ের পরিমাণ এবং সর্বোচ্চ বিক্রয়ের পরিমাণ নির্ধারণ করতে চান।** এখানেই **Aggregate Function এর খেলাটা জমে।**Aggregate Functions একটি set of values এর উপর ক্যাল্কুলেশন পরিচালনা করে, ডেটা সংক্ষিপ্ত করে একটি একক মান প্রদান করে।

---
## কিছু সাধারণভাবে ব্যবহৃত Aggregation functions নিম্নে বর্ণনা করা হলো:

1. **SUM**: Calculates the sum of a numeric column.(  **`যোগ করা` numeric value এর মথ্যে**
2. **AVG**: Computes the average of a numeric column.
3.**MAX**: Finds the highest value in a column.
4. **MIN:** Identifies the lowest value in a column.
5. **COUNT**: Counts the number of rows in a result set.
```sql
// এখানে শুরুতে এবং শেষে মাঝখানে J আছে এরকম ডাটা আছে তিনটা ঐই ডাটা এর মথ্যে `salary` আছে তিনটা ।
select COUNT(salary) FROM Employees WHERE name LIKE '%J%';
ans : 3
select COUNT(salary) as newCloumn FROM Employees WHERE name LIKE '%J%';
// এখানে যেহেতু একটা কলাম আসবে তাই কলাম নেম দিয়েছি 

```

---

**এগুলো ছাড়াও আরও অনেক Aggregate Functions রয়েছে। এই ফাংশন গুলি ব্যবহার করে আপনার প্রয়োজনীয় ডাটা খুব সহজে বের করে আনতে পারেন**।

**PostgreSQL এ Aggregate functions গুলো Independent এবং GROUP BY ধারার মাদ্ধমে পরিচালিত হয়। নিম্নে এগুলো বর্ণনা করা হলোঃ**

Independent clause

- Independent clause এর সিনট্যাক্স হচ্ছে

```sql
SELECT aggregate_function(column) AS alias
FROM table_name;
```

- **আমরা `select` keyword এর পরে `aggregate_function` ফাংশন লিখব । এর ভিতরে `column name`দিবো । তারপর `AS` কিওয়ার্ড দিবো , এর পরে নাম দিবো । যে নাম দিবো ওটা দেখাবে ।**

- উপরিউক্ত সিনট্যাক্স অনুযায়ী যদি আমরা কম্পানির মোট আয় বের করতে চায় তবে কুয়েরিটি হবেঃ

## GROUP BY clause

**প্রশ্ন হতে পারে `group by` কখন ইউজ করব ?**
**যখন আমরা `group` করতে চাই ।**

**যেটা `redundancy` হয় , তখন `group by` করতে হয় ।**

**`group by` মধ্যে যেটা রাখব ওইটা `select` এর মধ্যে থাকতে হবে । * দিলে হবে না ।**


```sql 
select e.deptid, avg(d.deptid) , sum(d.deptid) from Employees as e FULL JOIN department as d ON d.deptid = e.deptid GROUP BY e.deptid;
```

```sql
SELECT SUM(sales_amount) AS total_sales
FROM sales;
GROUP BY clause
```
<br>
<br>

```sql
SELECT column1, column2, aggregate_function(column3) AS alias
FROM table_name
GROUP BY column1, column2;
```
<br>
<br>

---
- উপরিউক্ত সিনট্যাক্স অনুযায়ী যদি আমরা কাস্টমারদের গড় ক্রয় বের করতে চায় তবে কুয়েরিটি হবেঃ
<br>
<br>

```sql
SELECT customer_id, AVG(purchase_amount) AS average_purchase
FROM sales
GROUP BY customer_id;
```
---
## SUBQUERIES: UNLEASHING THE POWER OF NESTING
**যে `highest` selary তার ডাটা নিতে চাই ।**
**`highest selary` জন্য একটা query , তার ডাটা আনতে আরেকটা `query` করতে হয় ।**

তিনভাবে `subqueries` 
## Case 1 `where` মধ্যে ইউজ করা ।

```sql
select * from employees where salary = 8000;
এখানে ৮০০০ টাকা সেলারি বের করতে আরেকটা কুয়েরীর প্রয়োজন হচ্ছে।
select * from employees where salary = (select max(salary) from employees)
```
```sql
SELECT *
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```
## Case 2 `table` মধ্যে ইউজ করা ।
```sql
SELECT email, (SELECT AVG(salary) FROM employees)
FROM employees
```
## 




**Subqueries হল SQL এর একটি জটিল এবং অত্যন্ত দরকারী দিক যা আপনাকে একটি কোয়েরি অন্যটির মধ্যে এম্বেড/স্থাপন করার ক্ষমতা দেয়।** এটি আপনাকে জটিল সমস্যাগুলিকে আরও ছোট ছোট অংশে বিভক্ত করে সমাধান করার সুবিধা দেয়।
এমন একটি পরিস্থিতি বিবেচনা করুন যেখানে আপনি এমন গ্রাহকদের খুঁজে পেতে চান, যারা বিক্রির গড় পরিমাণের চেয়ে বেশি কেনাকাটা করেছেন। এটি একটি subquery ব্যবহার করে সম্পন্ন করা যেতে পারেঃ

- **Subqueries এর সিনট্যাক্স হচ্ছে**
```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN operator (SELECT columnX FROM another_table WHERE conditions);
```

- উপরিউক্ত সিনট্যাক্স অনুযায়ী কুয়েরিটি হবে
```sql
SELECT customer_name
FROM customers
WHERE purchase_amount > (SELECT AVG(purchase_amount) FROM sales);
```

- কয়েকটি ধাপের মধ্যে কুয়েরিটিটি কাজ করেঃ
  - ১. sales টেবিল থেকে purchase_amount এর গড় গণনা করে।
  - ২. customers টেবিল থেকে customer_name কলাম সিলেক্ট করে, যাদের purchase_amount sales টেবিলের purchase_amount এর গড়ের চেয়ে বেশি।

## PUTTING IT ALL TOGETHER: COMBINING AGGREGATES AND SUBQUERIES
SQL এর সত্যিকারের জাদু ফুটে ওঠে যখন আপনি সমষ্টিগত ফাংশন এবং সাবকোয়ারি একত্রিত করেন। এই মাধ্যমে আপনি জটিল সমস্যার সমাধান সহজেই করতে পারবেন।
**ধরা যাক আপনি sales টেবিল থেকে সকল কাস্টমারের জন্যে গড় প্রোডাক্ট প্রাইজ বের করতে চান যেখানে শুধুমাত্র যে পণ্যগুলির গড় মূল্য products টেবিলের সামগ্রিক গড় মূল্যের চেয়ে বেশি। সহজ কথায়, আপনি পণ্যগুলিতে গড়ে বেশি ব্যয়কারী গ্রাহকদের খুঁজে পেতে চান।** 

এক্ষেত্রে নিম্নে তার উদাহরণ দেয়া হলোঃ

- Combining Aggregates and Subqueries এর সিনট্যাক্স হচ্ছে

```sql
SELECT column1, aggregate_function(column2), ...
FROM table_name
WHERE columnN operator (SELECT columnX FROM another_table WHERE conditions)
GROUP BY column1;
```

- উপরিউক্ত সিনট্যাক্স অনুযায়ী কুয়েরিটি হবে

```sql
SELECT s.customer_id, AVG(p.product_price) AS avg_product_price
FROM sales s
JOIN (
    SELECT product_id, AVG(product_price) AS product_price
    FROM products
    GROUP BY product_id
) p ON s.product_id = p.product_id
WHERE p.product_price > (SELECT AVG(product_price) FROM products)
GROUP BY s.customer_id;
```

- **কুয়েরিটিটি কয়েকটি ধাপের মধ্যে কাজ করেঃ**

  - ১. sales টেবিল থেকে product_id কলাম অনুযায়ী products টেবিলকে JOIN করে। এর মানে হল যে রেজাল্ট সেটের প্রতিটি সারিতে উভয় টেবিল থেকে ডেটা থাকবে, একই পণ্যটির জন্য।

  - ২. sales টেবিলের প্রতিটি গ্রাহকের জন্য গড় পণ্য মূল্য গণনা করে। এটি GROUP BY ক্লজ ব্যবহার করে প্রতিটি গ্রাহক আইডি অনুযায়ী সারিবদ্ধ করে এবং তারপর AVG() ফাংশন ব্যবহার করে প্রতিটি গ্রুপের জন্য গড় পণ্য মূল্য গণনা করে করা হয়।

  - ৩. সমস্ত পণ্যের গড় মূল্য থেকে বেশি গড় পণ্য মূল্যের সাথে গ্রাহকদের ফিল্টার করে। এটি WHERE ক্লজ ব্যবহার করে করা হয়।

  - ৪. অবশেষে, গ্রাহক আইডি অনুযায়ী গ্রুপ করে এবং প্রতিটি গ্রুপের জন্য গ্রাহক আইডি এবং গড় পণ্য মূল্য আউটপুট করে।

- **কুয়েরিটিটির আউটপুট একটি টেবিল হবে যার দুটি কলাম থাকবেঃ**
  - customer_id: গ্রাহকের আইডি।
  - avg_product_price: গ্রাহকের জন্য গড় পণ্য মূল্য।

আশা করছি উপরে উল্লিখিত উদাহরণ গুলো থেকে আপনারা Aggregate Functions এবং Subqueries এই টুলগুলি সম্পর্কে কিছুটা ধারনা পেয়েছেন এবং কুয়েরি সিনট্যাক্স গুলো সিখতে পারেছেন।
Additional resources: [https://www.techonthenet.com/postgresql/index.php,
PostgreSQL Tutorial – Comprehensive Postgresql Tutorial]
এই ব্লগ টি সম্পর্কে আপনার মন্তব্য জানাতে ভুলবেননা। Thank you, Keep learning… 😎

## Views

**এটা টেবিলের মত যা `views` ক্রিয়েট করতে হয় ।**

**একটা নতুন views ক্রিয়েট হবে । নাম হবে `email`**
```sql
CREATE VIEW email AS select email from employees;
```
**একবার `view` ক্রিয়েট করে নিচে `view` এর নাম ধরে সার্চ করছি ।**
```sql
select * from email;
```
## Store procedure and funciton

**এটা সাধারণত ব্যবহার হয় না ।**

**এখানে দুইটা জিনিস , একটা `procedure` আরেকটা `function`**
plsql , plpgsql , language শিখা লাগে ।

**এখানে `function` থাকে আবার কল করতে হয় । এর ভিতরে একটা দুইটা sql কুয়েরি লিখা যায় ।**
```

```

## Trigger
এটা একটা ইভেন্টা 
**`trigger` অনেক ধরণের হতে পারে । `insert` , `update` , `delete`**

**`insert` ইভেন্টের উপর ভিত্তি করে অন্য `sql` এক্সিকিউট করতে পারি ।**

**আমার কাউকে নোটিফিকেশন পাঠানো দরকার বা অন্য টেবিলে ডাটা ইনসার্ট করা দরকার এক্ষেত্রে `trigger` লাগে ।**
### কখন `trigger` use করতে হয় ।

**`trigger` কখন ইউজফুল?**

**Audit log এর ক্ষেত্রে ।**

**একজন ইউজারের ব্যাংকিং ইনফরমেশন থাকে । আমরা চাই যখন ব্যংকিং ইনফরমোশন পরিবর্তন হবে । তখন আগের ডাটা স্টোর করার জন্য নতুন টেবিল ক্রিয়েট হবে । একটা টেবিল আরেকটা টেবিল ক্রয়েট হবে ।**

**ধরুন আমরা ডাটা `insert` করব । insert করার পর ইউজার ধেকে `5%` tax কেটে নিবো ।**

## যদি ও এটা `backend` দিয়ে করতে পারি তবু ও আমরা `trigger` দিয়ে করতে পারি ।**


## indexing and optimization
**important topic**




**আমরা নিচের কুয়েরীগুলো `analysis` করতে পারি ।**

```sql
select * from employees;
select name from employees;
```

```sql
explain analysis select * from employees;
```


## Indexing কি?
**আমরা যখন বইয়ে কোন একটা টপিকের উপর পড়তে চাই তাহলে আগে সুচিপত্র দেখে কোন অধ্যায়ে আছে ওটা দেখি ।**

**index ঠিক সেরকম**

***আমরা যা ডাটা রাখি ওটা কী আকারে থাকে ?**
**`ssd` অথরা `hdd` তে ব্লক আকারে থাকে । খরেন প্রত্যেকটা `row` দুই বাইট করে জায়গা নেয় ।**

**আমরা যখন ডাটা সার্চ করি তখন `cpu` million , billion data `per second` এ ম্য্যানেজ করে । `cpu` `ram` থেকে access করে ‌`ram` hdd বা ssd থেকে একসেস করে ।**

**ইনডেক্সিং করলে কোন ডাটাকে আমরা সহজেই একসেস করতে পারি । যখন `sql` এ `primary key` দিয়ে সার্চ করি তখন আনেক ফাস্ট হয় ।**

**আর যখন আমরা name সার্চ করি তখন অনেক সময় লাগে । কারণ `index` আকারে নেই ।**

**এজন্য আমরা যদি name কে `index` আকারে করতে চাই তাহলে নিচের কমান্ড ইউজ করব ।**

```sql
create index name_idx on exployess(name);
```
**এখন যদি আমরা সার্চ করি । তাহলে এখন প্রায় আগের তুলনায় আর্ধেক টাইম কম্প্লেকজিটি কমবে । এখন যদি আমরা `analysis` করি । তাহলে**

```sql
explain analysis select * from employees; where name LIKE '%Jhon%'
```
**সুতারাং এখানে টাইম কম্পেকজিটি কম হয়ে গেছে ।**



---
---
---
---
***










## what is prisma

* **prisma একটি ওপেন সোর্স ডাটাবেজ টোলকিট যা `database access` এবং `database management` সহজ করে দেয় ।**
* **`prisma` কে `next generation orm` বলা হয় ।**

## why prisma

* `prisma` একটি সুবিধা হচ্ছে **multiple database** support করে **যেমর mysql , postgresql , sqlite , বিশেষ করে `nosql` সাপোর্ট করে ।**

## prisma কি provide করে ?

* prisma **তিনটি কম্পোনেন্ট provide করে ।** 
  - prsma client
  
    * prsma client হচ্ছে আপারেশন চালানোর জন্য যে যে ফিচারগুলো দরকার সেগুলো প্রোভাইট করে **যেমন : `create` , `update` , `delete` , `transection roolback` ইত্যাদি ।**।
  * prisma migrate

    * রিলেশন , টেবিল ক্রিয়েট করে ।
  * prisma studio

    * এটা ইউজার ইন্টারফেস যা ডাটাবেজ `edit` `view` করতে পারি ।

## why should use prisma?

* যখন `server side application` ক্রিয়েট করি ।
* যদি টিমে কাজ করতে চাই ।
* টাইপ সেফটি 
* `orm` এর মত সুযোগ সুবিধা নিতে চাই 


## limitations of prisma

* যখন আমরা `complex query` লিখি তখন prisma ভালো `performance` করে না  । সেখানে `raw sql queries` লিখে সলভ করতে হয় ।

* `serverless deployment` complex হয়ে যায় ।
* `database level join` এর ব্যবহার করতে পারি না । যোমন : `right join , left join , inner join ,` .

## System requirements 

* Node.js 16 / 18 / 20
* typescript 4.7x
* yarn 1.19.2
## Prisma setup

* [doucument](#https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)
* 
```
yarn init -y
yarn add prisma typescript ts-node @types/node --save-dev
npx tsc --init
npx prisma
npx prisma init
```
## Folder structure
* prisma // folder
  * schema.prisma এটাতে ডাটাবেজ কানেকশন করতে পারব । **model create করা থাকে ।**
* env
  এর মধ্যে ডাটাবেজের `username` , `password` , `database name` দিতে হবে । 

## creating database schema and prisma migrate and install prisma client
* ## download prisma extension
  * prisma extension **vs code এ এক্সটেনশন ডাউনলোড করতে হবে । এই এক্সটেনশন `schema.prisma` file কে সুন্দর করে ফরমেটা করবে ।**
* ## model create
```prisma
model User {
  id  Int @id @default(autoincrement())
  email String
  name String
}
```
* ### sql migration create and run
```
npx prisma migrate dev --name init
yarn add @prisma/client
```
 * উপরের কমান্ড রান করলে **`prisma` folder এ `migration` folder create হবে । এবং postgresql মধ্যে `hello prisma` নামে ডাটাবেজ ক্রিয়েট হবে । এরপর `schema`=> `public` => `table` => `user` নামে টেবিল ক্রিয়েট করে দিবে ।**

 ## Write your first Query with Prisma Client (create and read)

 * প্রথমে root ফোল্ডারে `index.ts` ফাইল ক্রিয়েট করতে হবে । তারপর `prisma` ইনিশিয়ালাইজ করতে হবে ।
## read database

```js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const getAlluser = await prisma.user.findMany();
  console.log(getAlluser);
}
main();
```
## create user
```js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   const getAlluser = await prisma.user.findMany();
  //   console.log(getAlluser);
  const postUser = await prisma.user.create({
    data: {
      email: "arifullah@gimaiil.com",
      name: "arif",
    },
  });
}
main();
```

## run
```
npx ts-node index.ts
```
 
## generating Prisma client and prisma migrate

```js
model User {
  id  Int @id @default(autoincrement())
  email String @unique
  name String
}
```
### কেন migration generate ক্রিয়েট করতে হবে ।


এখানে আমরা `primary key` এর জন্য `@id` এবং আটো ইনক্রিমেন্টের জন্য `@default(autoincrement())` দিলাম  , আর unique এর জন্য **@uniqe** দিলাম ।

**এখানে যে মডেলে পরিবর্তন করলাম এটা তো ডাটাবেজে পরিবর্তন হল না**

### এজন্য `migration` জেনেরেট করতে হবে ।
## Generate migration

### why we generate migration
* **যখন আমরা `model` ক্রিয়েট করতে চাই এবং অথবা মডেল আপডেট করতে চাই ।**
* **`migration` একই সাথে কুয়েবী জেনেরেট করে এবং ডাটাবেজে রান করে ।**


```json
npx prisma migrate dev;
```
* উপরের কমান্ড দেয়ার পর `permission allow`করতে হবে । তারপর `migreation` এর নাম দিতে হবে । 

**যদি ইরর থাকে আর আগের ডাটা মুছে ফেলতে চাইলে `npx prisma migrate dev` তারপর `--name` দিতে হবে  `migration name` দিতে হবে ।**

```
npm prisma migrate dev --name এখানে মাইগ্রেশন নেম দিতে হবে ।
```
* উপরের কমান্য দেয়ার পর ডিলিট করার পারমিশন চাইবে । মানে ডাটা মুছে ফেলতে চাই কিনা ।

## Generate Prismma
**কখন `prisma` জেনেরেট করতে হয়?**
* prisma.schemma
```js
model User {
  id  Int @id @default(autoincrement())
  email String @unique
  name String
  age Int
}
```

উপরে `age` নতুন ক্রিয়েট করা হয়েছে ডাটবেজে age নেই ।

* index.ts

## কিন্তু যখন ক্রিয়েট করতে ডাটা পুশ করতে যাব তখন

```js 
const postUser = await prisma.user.create({
      data: {
        email: "arifullah@gimaiil.com",
        name: "arif",
        age : 25,
      },
    });

```
* উপরে age এর মধ্যে error দিচ্ছে। **এখানে যে ভ্যলিডেশনটা হচ্ছে ওটা `prismaClient` থেকে আসছে ।**
* এটা সলভ করতে নিচের কমান্ডটা দিতে হবে ।
```
npx prisma generate
```
* এখনো ও আমরা ডাটা পুশ করতে পারব না । **কারণ ডাটাবেজে `age` কলামটা নেই ।**
* এজন্য নিচের কমান্ড দিতে হবে ।
```
npx prisma migrate dev
```
* উপরের কমান্ড দিলে ও `migrate` হবে না **এই ইররটা দিবে `Step 0 Added the required column `age` to the `User` table without a default value. There are 1 rows in this table, it is not possible to execute this step.`**।
* এজন্য ` age Int` এটাকে অপশনাল `age Int?` অথবা `age Int @default(0)` করতে হবে অথবা ডিফল্ড ভ্যলু দিতে হবে । **ডাটাবেজ সবগুলো ভ্যলু আছে কিন্তু `age` এর কলাম নেই ।**
**নিচের মতে করতে হবে ।**
```js
model User {
  id  Int @id @default(autoincrement())
  email String @unique
  name String
  age Int?
}

```
* এখন আবার কমান্ড দিতে হবে ।
```
npx prisma migrate dev
```
## Data model , Names  in the Underling Database and Relation


## Data model , Names
```prisma
model User {
  id  Int @id @default(autoincrement())
  email String @unique
  name String
  role String?
}

model Profile {
  id Int @id @default(autoincrement())
  bio String
  userId Int
}

model Category {
 id Int  @id @default(autoincrement())
 name String
}

model Post {
   id Int  @id @default(autoincrement())
   title String
   authorId Int
   categoryId Int
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
}
```
**তারপর নিচের কমান্ড দিতে হবে ।**
```
npx prisma migrate dev
```
**এখন আরেকটা সমস্যা যে আমরা যেমন চাই তেমন টেবিল নেম ক্রিয়েট হয়নি ।**
**সুতারাং এটি করতে `@@map("profiles")` এভাবে লিখতে হবে ।**

```
model Profile {
  id Int @id @default(autoincrement())
  bio String
  userId Int @unique
  user User @relation(fields: [userId], references: [id])
  @@map("profiles")
}

model Category {
 id Int  @id @default(autoincrement())
 name String
 prosts Post[]
 @
```

## Relation one table to another table

## one to one relationship
* অন্য মডেলে যেখানে `foreign key থাকবে না` ওখানে `নাম , মডেল নাম` যেমন : `profile Profile?` optional দিতে হবে ।

[* one-to-one রিলেশনের ক্ষেত্রে যেখানে `foreign keys` থাকবে সেখানে ওই কলামকে **@unique** করতে হবে ।
* তার পরের লাইনে একটা নাম , `একটা মডেলের নাম`, `@relation annotation` এর ভিতরে দুইটা  parameter **`fields` এর ভিতরে দিতে হবে `নিজের ফিল্ড` কোর ফিল্ডকে রিলেশন করব তার নাম দিতে হবে আর রেফারেন্স মধ্যে দিতে হবে `অন্য মডেলের আইডি দিতে হবে ।`**]   


```js
model User {
  id  Int @id @default(autoincrement())
  email String @unique
  name String
  role String
  profile Profile?
  post Post[]
  @@map("users")
}

model Profile {
  id Int @id @default(autoincrement())
  bio String
  userId Int @unique
  user User @relation(fields: [userId], references: [id])
  @@map("profiles")
}
```

## one to many relationship
* অন্য মডেলে যেখানে `foreign key থাকবে না` ওখানে `নাম , মডেল নাম` যেমন : `post Post[]` array দিতে হবে ।
* one-to-many রিলেশনের ক্ষেত্রে যেখানে `foreign keys` থাকবে সেখানে ওই কলামের পরে করতে হবে ।
* তার পরের লাইনে `একটা নাম` , `একটা মডেলের নাম`, `@relation annotation` এর ভিতরে দুইটা  parameter **`fields` এর ভিতরে দিতে হবে `নিজের ফিল্ড` কোর ফিল্ডকে রিলেশন করব তার নাম দিতে হবে আর রেফারেন্স মধ্যে দিতে হবে `অন্য মডেলের আইডি দিতে হবে ।`**

```js
model User {
  id  Int @id @default(autoincrement())
  email String @unique
  name String
  role String
  profile Profile?
  post Post[]
  @@map("users")
}

model Profile {
  id Int @id @default(autoincrement())
  bio String
  userId Int @unique
  user User @relation(fields: [userId], references: [id])
  @@map("profiles")
}

model Category {
 id Int  @id @default(autoincrement())
 name String
 prosts Post[]
 @@map("categories")
}
model Post {
   id Int  @id @default(autoincrement())
   title String
   authorId Int
   author User @relation(fields: [authorId], references: [id])
   categoryId Int
   category Category @relation(fields: [categoryId], references: [id])
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   @@map("posts")
}
```
## Mapping Fieldcolumn Names , setting up express , Cors , and organizing file Stuctures

## Mapping Fieldcolumn Names
এর আগে আমরা টেবিল নেম চেন্জ করতে **@@("posts") এই এনোটেশন ব্যবহার করছিলাম** আর এখন কলাম নেম চেন্জ করতে **title String @map("post_title")**
## setting up express , Cors , RUN Server
এখন আমাদের **এপিআই** তৈরি করা প্রয়োজন । আর এপিআই তৈরি করতে `route` করা প্রয়োজন ।
**সাথে `cors` টা ইনস্টল করা প্রয়োজন**

```
yarn add nodemon -D
yarn add express cors
yarn add -D @types/express @types/cors
```
* `root folder` এর মধ্যে **src folder এর মধ্যে index.ts** file কে বসাতে হবে । তারপর `tsconfig.json` ভিতরে  `"rootDir": "./src",` দিতে হবে ।

* **প্রথমে `express` কে কল করে ইনিশিয়ালাইজ করলাম** , 

* **তারপর একটা `middleware` এর ভিতরে `express.json()` , ‌`এটা Post , put রিকোস্টের জন্য কাজে লাগে । get and delete request এর জন্য লাগে না ` কে কল দিলাম যা ইনকামিং json data`parse` করে `request body`এর মধ্যে ।**

* **তারপর আরেকটা `middleware`, `app.use(cors());`  লাগবে যা আমার সাভার সাড়া দিতে অনুমতি দিবে অন্য সাভারের রিকোয়েস্টে ।**

* এই মিডলওয়ার `app.use(express.urlencoded({ extended: true }));` , এবং ‌`এটা Post , put রিকোস্টের জন্য কাজে লাগে । get and delete request এর জন্য লাগে না ` **বিশেষ করে `incomming request` কে সীকৃতি দিবে Object as strings or arrays.** 

* সার্ভার স্টার্ট হওয়ার জন্য **listen function ব্যবহার করা হয়েছে ।**
* **এবং `package.json` এর ভিতর `script` ব্যবহার করা হয়েছে ।**
* run 
```
yarn start
```


* src

  * in index.ts
```js
import { PrismaClient } from "@prisma/client";
import express, { Application } from "express";
import cors from "cors";

// import and initialise the express application

const app: Application = express();
// this is middleware that  express.json() is used to parse incoming JSON payloads in the request body
app.use(express.json());
//this is middleware that Cross-Origin Resource Sharing
//cors() middleware helps relax these restrictions and allows your Express server to respond to requests from different origins.
app.use(cors());
// another middleware . The express.urlencoded() middleware is used to parse incoming URL-encoded form data in the request body.
app.use(express.urlencoded({ extended: true }));

const prisma = new PrismaClient();

const port = process.env.PORT || 3000;


async function main() {
app.listen(port , ()=> {
  console.log(`server running port ${port}`);
})

}
main();
```
* package.json

```js
 "scripts": {
    "start" : "nodemon ./src/index.ts"
  },
```
## arrange folder in you project
* উপরে যে `file` এ **index.ts** express , cors কে রাখলাম ওটা `app.ts` এ রাখি ।

* src
  * app.ts

```js
import express, { Application } from "express";
import cors from "cors";

// import and initialise the express application

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

export default app;
```

* src 
  * index.ts

```js
import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 3000;

async function main() {
  app.listen(port, () => {
    console.log(`server running port ${port}`);
  });
}
main();

```
* src
  * modules
    * user
      * user.controller.ts
      * user.service.ts
      * user.router.ts

## creating user and introduction to prisma studio
**এখানে api create করব । এবং prisma এর সাথে connect করব ।**
## user router তৈরি করব
* **প্রথমে user.route.ts এর মধ্যে গিয়ে `express` কে নিয়ে আসতে হবে । কারণ তার মধ্যে router আছে ।**
* এই router এর মধ্যে `get, put , post , delete` method আছে ।

* user.route.ts
```js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello prisma");
});
router.post("/create-user", UserController.InsertIntoDB);
export const UserRoutes = router;
```
* উপরে যে app.ts আছে ওটাতে উপরের ফাইলকে কানেক্ট করব 
* in app.ts

```js
app.use("/api/v1/users", UserRoutes);
```
## creating user service
* এখানে `(data: User)`ইউজারকে পেলাম `prisma/client` থেকে যেইটা আমরা `schema.prisma` তে মডেল ক্রিয়েট করা আছে ।
* `prisma.user.create({ data })` ইউজার ক্রিয়েট করার জন্য `create` মেথডটি `new PrismaClient();` ইনিশিয়ালাইজ করে পেয়েছি ।

* `prismaClient` এর ভিতরে user আছে তারপর create মেথড আছে ।


```ts
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

const InsertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};
export const userService = {
  InsertIntoDB,
};
```
## creating user controller
```js
import { Request, Response } from "express";
import { userService } from "./user.service";

const InsertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.InsertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.send(error);
  }
};

export const UserController = { InsertIntoDB };
```
## creating prisma studio server and run

* এটা `prisma studio` server সুবিধা হচ্ছে 
* আমরা টেবিল গুলো অন্য টেবিলের সাথে লিংক করেছি ওটা দেখা যাচ্ছে ।
* যেটা mongodb, mongoes এ দেখা যাচ্ছে না ।
* এবং ডাটা লাইভ দেখতে পারব 
* install
```
npx prisma studio
```
## run 
```
 http://localhost:5555
```
## Create or update profile conditionally
* এখানে ইউজার যদি থাকে update করতে পারবে ।
* আর যদি না থাকে ইনসার্ট করতে পারবে ।
* **নিচের service.ts prisma এর তিনটা মেথড আছে , একটা হচ্ছে `findUnique` , `update` , `create`**
* `findUnique` মেথড একটা প্যারামিটার নিচ্ছে where : {id} যেটা দিয়ে query করবে ডাটাবেজে একটা unique রেজাল্ট এর ক্ষেত্রে ব্যবহার হয় । এখানে `where` মধ্যে field name এর ভিতরে value দিতে হবে ।

* নিচের update এর মধ্যে where রাখা হয়েছে যে কোথায় update করব । এবং কি আপডেট করতে চাই data এর মধ্যে বলে দিতে হয় ।

```js
update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },})
```


```js
const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExit = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });
  if (isExit) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }
  const result = await prisma.profile.create({
    data,
  });
  return result;
};
```
## include relations and select relation fields
## get all user
* এখানে findmany ব্যবহার করা হয়েছে ।
```js
const getUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};
```
## select specific one column or field
* আমরা যদি চাই যে , সিলেক্ট করে শুধু ৃ সকল user এর ইমেইল নিতে তাহলে 
* এক্ষেত্রে select object এর ভিতরে field true দিতে হবে ।‌
```js
 const result = await prisma.user.findMany({
    select: {
      email: true,
    },
  });
```
## Relatioal table select
include অবজেক্ট দিতে হবে ।
```js
  const result = await prisma.user.findMany({
    // select: {
    //   email: true,
    // },
    include: {
      profile: true,
    },
  });
  return result;
```
## Get single user with relational table data 


```js
const getSingleUsers = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};
```
## Create and get all Post different ways

## Create post and get all table relation data

**এখানে একটা কথা মনে রাখা প্রয়োজন যা ডাটা `insert` করার সময় কলাম নেম দিতে হবে for example`authorId`, `categoryId` দিতে হবে ।**

**ডাটা ক্রিয়েট করার পর রিটার্ন করার সময় `relation` নেম দিতে হবে । যেমন : `author` , `category`**


* in schema.prisma

```ts
model Post {
   id Int  @id @default(autoincrement())
   title String
   authorId Int
   author User @relation(fields: [authorId], references: [id])
   categoryId Int
   category Category @relation(fields: [categoryId], references: [id])
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   @@map("posts")
}
```

* in post.service.ts

```js
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
```

* in postman body

```json
{
   "title" : "test title 2",
   "authorId" : 1,
   "categoryId" : 1
}
```
* return data

```json
{
    "success": true,
    "message": "post create  successfully",
    "data": {
        "id": 2,
        "title": "test title 2",
        "authorId": 1,
        "categoryId": 1,
        "createdAt": "2023-08-17T01:34:29.663Z",
        "updatedAt": "2023-08-17T01:34:29.663Z",
        "author": {
            "id": 1,
            "email": "jkr@gmail.com",
            "name": "jhankar",
            "role": "admin"
        },
        "category": {
            "id": 1,
            "name": "web development"
        }
    }
}
```

* যদি আমরা authorId ভুল দিলে অর্থাৎ ডাটাবেজে না থাকে এরকম দিলে তাহলে দিবে ।
## Get all post 

* post service.ts

```js
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
```
## Filter and Ordering



## ordering and sorting

* in controller

`controller` মধ্যে শুধু ‌`req.query` যা পাই ভ্যারিয়েবলের মধ্যে রেখে `service` এর মধ্যে পাঠাতে হবে ।
```js
const options = req.query;
```
* in service 

আমরা controller থেকে যা পাচ্ছি তা recive করে । তারপর `distruture` করলাম 
* `findMany` মেথডের ভিতরে `orderBy` মধ্যে `sortby , sortOrder` ডাইনামিকালি বসাই দিলাম ।
* `sortBy` ,এর মধ্যে থাকবে title `sortOrder` এর মধ্যে থাকবে `asc` , `desc` থাকবে ।  


```js
const getPosts = async (options: any) => {
  const { sortBy, sortOrder } = options;
  console.log(sortBy, sortOrder);

  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  return result;
};
```
## default sort order

* যদি আমরা sort করার জন্য না দিই তাহলে ‌`created date` সর্ট হবে ।

* এখানে বলে দিছি যে যদি `sorBy && sortOrder` থাকে তাহলে সেই অনুযায়ী সর্ট করবে ।

* আর না হলে তারিখ আকারে সর্ট হবে ।

```js
 orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : { createdAt: "desc" },
```
## searching

* সার্চের জন্য প্রথমে `req.query` থেকে নিতে হবে ।
* `service` এর মধ্যে পাঠাতে হবে । 
* নিচের মত করে পাঠাতে হবে । `searchTerm=t`এভাবে ডাটা আসবে । 
* আমরা যদি চাই `case sensitive` হবে তাহলে `mode : insensitive` এটা দিতে হবে । এটি দিতে হবে `where` এর `title` ভিতর দিতে হবে ।

```js
where: {
      title: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
```

```js
http://localhost:3000/api/v1/post?sortBy=title&sortOrder=asc&searchTerm=T
```
```js
 orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : { createdAt: "desc" },

    where: {
      title: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
```
* এখন আমরা যদি চাই , `searchTerm` দুইটা তিনটা কলামের মধ্যে সার্চ করতে তাহলে `where : {}` এর ভিতরে `OR [{ কলাম } , {কলাম}]` দিতে হবে ।, এর ভিতরে একটা একটা কলাম রাখব ।
```js
   where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    },
``` 




