scp deploy.pub ubuntu@3.8.141.48/home/ubuntu/.ssh
ssh ubuntu@3.8.141.48
cd .ssh
cat deploy.pub >> authorized_keys

