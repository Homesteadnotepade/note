function DomainTrans(){

    var DTO = ["Domain(s) Transfer Out","-Unlocked Domain","-Checked Registrant Contact Email Address", "-Email Auth Code", "-Educated about time frame on how long the transfer process will take"];  
    splabr = "\n" + "<br>"

        document.getElementById('output').innerHTML = DTO[0] + splabr + DTO[1] + splabr
         + DTO[2] + splabr + DTO[3] + splabr + DTO[4];
}