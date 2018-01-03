  var firstObj = null;
   var replaceObj = function () {
     // hold on to the prior object
     var priorObj = firstObj;
 
     var unused = function () {
       // 'unused' is the only place where
       //'priorObj' is referenced,
       if (priorObj) {
         priorObj.sampleStr = 'Hello String';
         console.log('priorObj---',priorObj);
         console.log('firstObj---',firstObj);
 
       }
     };
     firstObj = {
     // create an one MB object
       longStr: new Array(1000000).join('*'),
       sampleMethod: function () {
         console.log(sampleMessage);
       }
     };
   };
   // invoke `replaceObj' once every second
   setInterval(replaceObj, 1000);
