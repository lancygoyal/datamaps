define("foo-1.0/bar/baz",[],function(){return"1.0"}),define("foo-1.2/bar/baz",[],function(){return"1.2"}),define("oldmodule",["foo/bar/baz"],function(e){return{name:"oldmodule",baz:e}}),require({baseUrl:"./",map:{oldmodule:{foo:"foo-1.0"},"*":{"foo/bar":"foo-1.2/bar"}}},["oldmodule"],function(e){doh.register("mapConfigSpecificity",[function(n){n.is("oldmodule",e.name),n.is("1.0",e.baz)}]),doh.run()})