(function(e,t){typeof define=="function"&&define.amd?define(["underscore","backbone"],function(n,r){return e.Store=t(e,n,r)}):e.Store=t(e,_,Backbone)})(this,function(e,t,n){function r(){return((1+Math.random())*65536|0).toString(16).substring(1)}function i(){return r()+r()+"-"+r()+"-"+r()+"-"+r()+"-"+r()+r()+r()}var s=function(e){this.name=e;var t=localStorage.getItem(this.name);this.data=t&&JSON.parse(t)||{}};return t.extend(s.prototype,{save:function(){localStorage.setItem(this.name,JSON.stringify(this.data))},create:function(e){return e.id||(e.id=e.attributes.id=i()),this.data[e.id]=e,this.save(),e},update:function(e){return this.data[e.id]=e,this.save(),e},find:function(e){return this.data[e.id]},findAll:function(){return t.values(this.data)},destroy:function(e){return delete this.data[e.id],this.save(),e}}),n.sync=function(e,t,n){var r,i=t.localStorage||t.collection.localStorage;switch(e){case"read":r=t.id?i.find(t):i.findAll();break;case"create":r=i.create(t);break;case"update":r=i.update(t);break;case"delete":r=i.destroy(t)}r?n.success(r):n.error("Record not found")},s})