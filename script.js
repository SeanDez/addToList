const { parseInformalAddress, parseLocation } = require('parse-address');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/sync');


// get folder and filenames
const targetFilesPath = path.join( __dirname, 'targetFiles' )

const getFileNames = () => {
    const files = []

    const files = fs
        .readdirSync( targetFilesPath, { withFileTypes: true } )
        .forEach( dirent => {
      const isFolder = dirent.isDirectory()
      
      if (isFolder) {
        return;
      }

        files.push(dirent.name)
    } )

    return files
}

const files = getFileNames()

const fileNameData = files.map( fullFileName => {
    const fileNameOnly = fullFileName.match(/[^\.]+/)[0]
    return {
        fullName: fullFileName,
        withoutPrefix: fileNameOnly,
    }
} )

// kick out all files that match infoAdded
const onlyUnprocessedFiles = fileNameData.filter( fileDetails => {
    const processedFileName = `${fileDetails.withoutPrefix}-infoAdded.csv`

    const found = Boolean( files.some(fileName => fileName === processedFileName) )
    return !found
})


(async () => {
// check for duplicates
    // load master file once first
    // do a double handshake check thereafter

    


    // for each address in the target file
    const address = '189 E Main st ste 43-09, toledo oh'
    const lowercasedAddress = address.toLocaleLowerCase();

})()

// skip trace remainder (this is async)
    // remove
        // death.dateOfDeath > 10 months
        // litigator == true
    // enhance with
        // name
        // bk.   bankruptcy, filingDate
        // phoneNumbers
        // mailing address
        // property.  absenteeOwner, equityPercent, owner, uspsDeliverable, vacant
        // property address

// get all records from cloud sheet earlier than cutoff months








































