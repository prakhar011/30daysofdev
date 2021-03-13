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

## DNS 

#### Domain name Registrar :  A domain name registrar is a business that handles the reservation of domain names as well as the assignment of IP addresses for those domain names
#### Registry : they manage and maintain domain name 
####are businesses that provide domain name registration services to the public but are not accredited registrars. Resellers buy .au domain names and manage domain name records for their customers through an interface with an accredited .au registrar. Resellers do not have direct access to the .au registry.

#### for in more detail read following [Blog](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name-registrar/)
#### [DDNS](https://www.cloudflare.com/learning/dns/glossary/dynamic-dns/)
#### [blog](https://blog.nameshield.com/blog/2020/04/08/dns-on-blockchain-the-next-evolution-of-domain-names/#:~:text=The%20data%20included%20in%20the,of%20the%20DNS%20on%20Blockchain.)


## Hosting on Apache2

1. move your website to /var/www/html 
#### syntax :
```
sudo mv foldername/ /var/www/html
```
2. use following command to start 

```
sudo service start apache2
```
3. now on chrome address bar type following 
####http://127.0.0.1/foldername/
