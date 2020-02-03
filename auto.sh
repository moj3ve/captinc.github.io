#!/bin/bash
#Automatically adds all necessary information from each .deb in ./debs to ./Packages (control file, filename, size, md5, and sha256)
rm ./Packages
rm ./Packages.bz2
rm -r ./temp
mkdir ./temp

for deb in ./debs/*.deb; do
    echo "Processing $deb"
    dpkg -e $deb ./temp
    cat ./temp/control >> ./Packages
    echo "Filename: $deb" >> ./Packages
    echo "Size: `stat -f%z $deb`" >> ./Packages
    echo "MD5sum: `md5 -q $deb`" >> ./Packages
    echo "SHA256: `shasum -a 256 $deb | cut -f1 -d' '`" >> ./Packages
    echo "" >> ./Packages
done

rm -r ./temp
chmod 777 ./Packages
bzip2 -k ./Packages
echo "Complete!"
