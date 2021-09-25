# Build
FROM python:3.9.6-alpine3.14 as builder
RUN apk add --update python3-dev
COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install --upgrade pip; pip install --user -r requirements.txt;
COPY . .

# Package
FROM python:3.9.6-alpine3.14 as app
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
COPY --from=builder /root/.local /root/.local
COPY --from=builder /app/ /app/
WORKDIR /app
ENV PATH=/root/.local/bin:$PATH
CMD ["gunicorn"  , "-b", "0.0.0.0:8080", "app:app", "--workers=1", "--access-logfile=-"]
