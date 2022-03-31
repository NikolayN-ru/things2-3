FROM python:3.7-slim

WORKDIR /app

COPY req.txt .

RUN apt-get update && pip install --upgrade pip
RUN pip install -r req.txt
RUN pip install psycopg2-binary==2.8.3

COPY . .