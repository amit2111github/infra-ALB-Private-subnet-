## SSM agents installation 

https://docs.aws.amazon.com/systems-manager/latest/userguide/agent-install-ubuntu-64-snap.html

## Attach role to ec2 AwsSSMManagedInstanceCore to ec2.
if agent is not getting up even after role attachment => check for sg add https for 0.0.0.0/0

conection url of postgres
<code>psql -h hostname -U username -d databasename</code>
<h4>Make sure to have port 5432 open in postgres.conf file for back-end server.</h4>
<p>Also in templated add iam role for SSM</br> Add User Data script and make sure each has ec-2 same tag Name.</p>

<p>Infra Structure</p>
<img width="1262" alt="Screenshot 2025-03-08 at 5 06 24 PM" src="https://github.com/user-attachments/assets/9370cd97-def2-4b2f-885e-d1d2c2c862b8" />
