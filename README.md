# aws-api-serverless

Two serverless REST APIs on AWS Lambda, built with Node.js and the Serverless Framework. Each lives in its own folder with its own serverless.yml and deploy config.

## Projects in this repo

### RDS/ - CRUD API over MySQL (Amazon RDS)

REST endpoints backed by a MySQL database on Amazon RDS, accessed from Lambda functions running inside a VPC:

- `GET /RDSconnection/RDSTestconnection` - test the DB connection
- `POST /RDSconnection/RDScreate` - create a record
- `PUT /RDSconnection/RDSupdate/{id}` - update a record
- `DELETE /RDSconnection/RDSdelete/{id}` - delete a record
- `GET /RDSconnection/RDSselect/{id}` - fetch a record by id

See RDS/README.md for setup and deployment details.

### SES/ - Transactional email API via Amazon SES

A single Lambda endpoint that sends email through AWS Simple Email Service:

- `POST /sendEmail` - send an email (recipient, subject, message in the request body)

See SES/README.md for setup and deployment details.

## Stack

- Node.js, AWS Lambda, Serverless Framework
- Amazon RDS (MySQL) - VPC-networked database access
- Amazon SES - transactional email delivery
- IaC via serverless.yml: API Gateway routes, VPC/subnet/security group config, IAM permissions

## Deploying

Each folder deploys independently:

```
cd RDS   # or SES
serverless deploy
```

Requires AWS CLI credentials configured locally with permissions to create Lambda functions, API Gateway routes, and (for RDS) VPC/RDS resources.
