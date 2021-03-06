CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"link" varchar(1020) NOT NULL,
	"type_id" integer NOT NULL,
	"year_id" integer NOT NULL,
	"teachers_subjects_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "years" (
	"id" serial NOT NULL,
	"year" integer NOT NULL,
	CONSTRAINT "years_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"semester_id" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "types" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "types_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers_subjects" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "teachers_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "semesters" (
	"id" serial NOT NULL,
	"semester" varchar(255) NOT NULL,
	CONSTRAINT "semesters_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("type_id") REFERENCES "types"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("year_id") REFERENCES "years"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("teachers_subjects_id") REFERENCES "teachers_subjects"("id");



ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id");


ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");



INSERT INTO types (name) VALUES ('P1'), ('P2'), ('P3'), ('2CH'), ('Outras');

INSERT INTO semesters (semester) VALUES ('1'), ('2'), ('3'), ('4'), ('Eletivas');

INSERT INTO subjects (name, semester_id) VALUES ('Algoritmos 2', 2), ('Algoritmos 1', 1), ('Arquiteturas de Software', 5), ('C??lculo 1', 1), ('C??lculo 2', 3), ('Desenvolvimento Web', 4), ('Machine Learning', 4);


INSERT INTO years (year) VALUES (2014), ('2015'), ('2016'), ('2017'), ('2018'), ('2019'), ('2020'), ('2021');

INSERT INTO teachers (name) VALUES ('Jo??o D??ria'), ('In??cio Lula'), ('Eduardo Jorge'), ('Marina Silva'), ('Fernando Cardoso'), ('Dilma Rouseff');

INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (1, 1), (1, 2), (2, 2), (2, 3), (3, 3), (3, 4), (4, 4), (4, 5), (5, 5), (5, 6), (6, 6), (6, 7);




