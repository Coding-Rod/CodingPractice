FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    gcc \
    libc-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy and install Poetry dependencies
COPY pyproject.toml poetry.lock ./
RUN pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install --no-dev

# Copy the rest of the application code
COPY . .

# Expose the Flask port
EXPOSE 80

ENV FLASK_APP=src.app.py

# Set the entrypoint to run the Flask application
CMD ["python", "-m", "gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "src.app:app"]

# Path: pyproject.toml
# Compare this snippet from pyproject.toml:
# [tool.poetry]
# name = "flask-docker"
# version = "0.1.0"
# description = "A simple Flask application running in a Docker container"
LABEL author="Rodrigo Fernandez"