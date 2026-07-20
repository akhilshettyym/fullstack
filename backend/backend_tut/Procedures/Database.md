### mongodb.com -> login/signin -> Fill in details

### Step 1. Create a project.

### Step 2. Create a new Cluster
- Free cluster -> Cluster Name -> Providers (AWS) -> Region (Mumbai) -> Create Deployment.

### Step 3. Security
- Network Access Layer -> Add IP address -> Allow Access From Anywhere -> Confirm.

- Database Access -> Add New Database User -> Name -> AutoGen PW (COPY) -> User Description -> Built in role (Atlas admin). -> Add User.

### Step 4. Compass Download
mongodb.com -> Products -> Compass -> Download -> macOS.

### Step 5. Open Mongodb Compass (tool, To see what we store in db)
- Click on New Connection -> Go to Atlas (Cluster) Click on Connect -> Compass -> "I have MongoDB Compass installed" -> Copy the connection string -> Add in the copied password.
- This link will connect the cluster - URI will look like [mongodb+srv://name:password@clusterName.fz1zskm.mongodb.net/]
- Paste this in mongodb Compass, Select a color -> Save and Connect.

### Step 6. We use mongoose package inorder to connect out server to the database.