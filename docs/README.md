
### Expose local dev webserver over ssh tunnel

```bash
ssh -R 1080:localhost:3000 ubuntu@152.70.160.21
curl http://152.70.160.21:1080

# shorter version
ssh -R 1080:localhost:3000 amd2
curl http://amd2.kipronodenis.com:1080

# flush, works without server and ssh reboot
sudo iptables -F
# list
sudo iptables -L
# check
ss -tuln | grep 1080

# https tunnel
# MUST have *: before, important
# 1082 is tunnel only port, doesnt need to be opened on host 
ssh -R *:1082:localhost:3000 amd1c
https://preview.amd1.kipronodenis.com
```

### Sitemap, RSS and Json feed links

```bash
# root
https://kipronodenis.com/sitemap-index.xml

# all links
https://kipronodenis.com/sitemap-0.xml

# robots.txt
https://kipronodenis.com/robots.txt

# RSS
https://kipronodenis.com/api/feed.xml

# Json
https://kipronodenis.com/api/feed.json
```