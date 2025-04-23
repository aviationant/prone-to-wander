# Vite Blog with Strapi Backend

A blog platform with a **Vite** frontend and **Strapi** headless CMS backend, deployed on AWS.

## Architecture Overview

### Frontend
- **Framework**: Vite + React.
- **Deployment**: AWS Amplify.

### Backend
- **CMS**: Strapi for CMS with RESTful APIs.
- **Deployment**:
  - **EC2**: Runs Strapi on a t2.micro instance (Debian 12).
  - **RDS**: PostgreSQL for content storage.
  - **S3**: Stores images with access controlled through IAM.
