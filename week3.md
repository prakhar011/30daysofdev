# Day14 

## Redirection
#### Already done in week 2 source: book bible for linux command and shell scripting

## user management 

#### The system uses user ids (UID) to manage users, usernames are the friendly way to associate users with identification, but the system identifies users by their UID. The system also uses groups to manage permissions, groups are just sets of users with permission set by that group, they are identified by the system with their group ID (GID).

#### several file need root access to read them  you can get root excess either by su or sudo as discuss earlier 
#### '/etc/sudoers' file contain lists of user who  can run sudo.
####'/etc/passwd' To find out what users are mapped to what ID
#### The /etc/shadow file is used to store information about user authentication. It requires superuser read permissions.
## Permissions

#### to view permission of file type following command where desktop is the directory whoes file details to be viewed
```
ls -l Desktop/
```
#### there are four parts to file permision.The first part is filetype eg d stands for directory permission are grouped into three bits each the first three bits are user permmision then group permmision and then other permission.

#### r:readable
#### w:writeable
#### X:executable
#### -: empty

#### chmod: it is used to change permission.First, pick which permission set you want to change, user, group or other. You can add or remove permissions with a + or -, let's look at some examples. 
```
$ chmod u+x myfile
\\ add executable permission on myfile
$ chmod u-x myfile 
\\ remove executable permission
$ chmod ug+w
\\ add multiple permission bits on file 
```
#### '$ sudo chown patty myfile' this command will set owner of file to patty
#### '$ sudo chgrp whales myfile' this command will set the group of myfiles to whales 
#### '$ sudo chown patty:whales myfile' If you add a colon and groupname after the user you can set both the user and group at the same time. 

## Networking Commands

#### [route](https://www.geeksforgeeks.org/route-command-in-linux-with-examples/)


# Day 15

## what is LVM?

[Blog](https://www.digitalocean.com/community/tutorials/an-introduction-to-lvm-concepts-terminology-and-operations#:~:text=LVM%2C%20or%20Logical%20Vo)
#### 

# Day 16 

## Linux file structure 
#### [Blog](https://www.geeksforgeeks.org/linux-file-hierarchy-structure/)
# Day 17 

#### installed apache and used kill command 
#### read about package manager 
# Day 18 

## SSH

####
