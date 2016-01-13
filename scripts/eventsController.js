/**
 * Created by 60922 on 1/9/2016.
 */
var fs = require('fs');

module.exports.get = function(reg,res){
    var event = fs.readFileSync('app/data/event/'+ reg.params.id + '.json','utf8');
    res.setHeader('Content-Type','application/json');
    res.send(event);
};


module.exports.save = function(reg,res){
    var event = reg.body;
    fs.writeFileSync('app/data/event/' + reg.params.id + '.json',JSON.stringify(event));
    res.send(event);
};

module.exports.getAll = function(reg,res){

    var path= 'app/data/event/';
    var files= [] ;
    try{
        files = fs.readdirSync(path);
    }
    catch(e){
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx<files.length;idx++){
        if(files[idx].indexOf(".json") == files[idx].length - 5){
            results+=fs.readFileSync(path+"/"+files[idx])+",";
        }

    }

    results = results.substr(0,results.length-1);
    results+="]";

    res.setHeader('Content-Type','application/json');
    res.send(results);
    res.end();

};