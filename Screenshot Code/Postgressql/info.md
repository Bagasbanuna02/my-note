# Info here
## copas dibawah ini
- psql -U bip -p 5433 ( cek dulu )
- brew services restart postgresql
- ls /opt/homebrew/var/postgresql@14
- cat /opt/homebrew/var/postgresql@14/postmaster.pid
- rm /opt/homebrew/var/postgresql@14/postmaster.pid
- brew services restart postgresql
- psql -U bip -p 5433 -d hipmi
