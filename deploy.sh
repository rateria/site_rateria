#! /bin/sh

. ./env.rtr

SITE_DIR="out/"

echo "Deploy do site"

sshpass -p $HOST_PASSWD rsync -avL --rsh="ssh -p $HOST_PORT" --checksum $SITE_DIR $SERVER/

echo "Concluído!"
