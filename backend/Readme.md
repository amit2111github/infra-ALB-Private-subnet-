SSM agents installation 

https://docs.aws.amazon.com/systems-manager/latest/userguide/agent-install-ubuntu-64-snap.html

Attach role to ec2 AwsSSMManagedInstanceCore to ec2.
if agent is not getting up even after role attachment => check for sg add https for 0.0.0.0/0

conection url
psql -h hostname -U username -d databasename