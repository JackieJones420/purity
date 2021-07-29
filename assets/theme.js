window.slate = window.slate || {};
window.theme = window.theme || {};
/*================ Library ================*/
var slice=[].slice,extend=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child},hasProp={}.hasOwnProperty;!function(root,factory){var name,ref,results,value;if("function"==typeof define&&define.amd)return define(factory);if("object"==typeof exports)return module.exports=factory();root.cloudinary||(root.cloudinary={}),ref=factory(),results=[];for(name in ref)value=ref[name],results.push(root.cloudinary[name]=value)}(this,function(){var ArrayParam,BaseUtil,ClientHintsMetaTag,Cloudinary,Condition,Configuration,Expression,ExpressionParam,FetchLayer,HtmlTag,ImageTag,Layer,LayerParam,Param,RangeParam,RawParam,SubtitlesLayer,TextLayer,Transformation,TransformationBase,TransformationParam,Util,VideoTag,addClass,allStrings,augmentWidthOrHeight,base64Encode,base64EncodeURL,camelCase,cloudinary,contains,convertKeys,crc32,cssValue,curCSS,defaults,domStyle,funcTag,getAttribute,getData,getStyles,getWidthOrHeight,hasClass,isFunction,isNumberLike,isObject,m,objToString,objectProto,parameters,pnum,reWords,removeAttribute,rnumnonpx,setAttribute,setAttributes,setData,smartEscape,snakeCase,utf8_encode,width,withCamelCaseKeys,withSnakeCaseKeys,without;_=function(){function addMapEntry(map,pair){return map.set(pair[0],pair[1]),map}function addSetEntry(set,value){return set.add(value),set}function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}function arrayEach(array,iteratee){for(var index=-1,length=null==array?0:array.length;++index<length&&!1!==iteratee(array[index],index,array););return array}function arrayFilter(array,predicate){for(var index=-1,length=null==array?0:array.length,resIndex=0,result=[];++index<length;){var value=array[index];predicate(value,index,array)&&(result[resIndex++]=value)}return result}function arrayIncludes(array,value){return!!(null==array?0:array.length)&&baseIndexOf(array,value,0)>-1}function arrayIncludesWith(array,value,comparator){for(var index=-1,length=null==array?0:array.length;++index<length;)if(comparator(value,array[index]))return!0;return!1}function arrayMap(array,iteratee){for(var index=-1,length=null==array?0:array.length,result=Array(length);++index<length;)result[index]=iteratee(array[index],index,array);return result}function arrayPush(array,values){for(var index=-1,length=values.length,offset=array.length;++index<length;)array[offset+index]=values[index];return array}function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=null==array?0:array.length;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}function asciiToArray(string){return string.split("")}function baseFindIndex(array,predicate,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?1:-1);fromRight?index--:++index<length;)if(predicate(array[index],index,array))return index;return-1}function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex)}function baseIsNaN(value){return value!==value}function baseTimes(n,iteratee){for(var index=-1,result=Array(n);++index<n;)result[index]=iteratee(index);return result}function baseUnary(func){return function(value){return func(value)}}function baseValues(object,props){return arrayMap(props,function(key){return object[key]})}function cacheHas(cache,key){return cache.has(key)}function charsStartIndex(strSymbols,chrSymbols){for(var index=-1,length=strSymbols.length;++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1;);return index}function charsEndIndex(strSymbols,chrSymbols){for(var index=strSymbols.length;index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1;);return index}function getValue(object,key){return null==object?undefined:object[key]}function hasUnicode(string){return reHasUnicode.test(string)}function mapToArray(map){var index=-1,result=Array(map.size);return map.forEach(function(value,key){result[++index]=[key,value]}),result}function overArg(func,transform){return function(arg){return func(transform(arg))}}function setToArray(set){var index=-1,result=Array(set.size);return set.forEach(function(value){result[++index]=value}),result}function strictIndexOf(array,value,fromIndex){for(var index=fromIndex-1,length=array.length;++index<length;)if(array[index]===value)return index;return-1}function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string)}function unicodeToArray(string){return string.match(reUnicode)||[]}function lodash(){}function Hash(entries){var index=-1,length=null==entries?0:entries.length;for(this.clear();++index<length;){var entry=entries[index];this.set(entry[0],entry[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},this.size=0}function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];return this.size-=result?1:0,result}function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result}return hasOwnProperty.call(data,key)?data[key]:undefined}function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key)}function hashSet(key,value){var data=this.__data__;return this.size+=this.has(key)?0:1,data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value,this}function ListCache(entries){var index=-1,length=null==entries?0:entries.length;for(this.clear();++index<length;){var entry=entries[index];this.set(entry[0],entry[1])}}function listCacheClear(){this.__data__=[],this.size=0}function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);return!(index<0)&&(index==data.length-1?data.pop():splice.call(data,index,1),--this.size,!0)}function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1]}function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1}function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);return index<0?(++this.size,data.push([key,value])):data[index][1]=value,this}function MapCache(entries){var index=-1,length=null==entries?0:entries.length;for(this.clear();++index<length;){var entry=entries[index];this.set(entry[0],entry[1])}}function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function mapCacheDelete(key){var result=getMapData(this,key).delete(key);return this.size-=result?1:0,result}function mapCacheGet(key){return getMapData(this,key).get(key)}function mapCacheHas(key){return getMapData(this,key).has(key)}function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;return data.set(key,value),this.size+=data.size==size?0:1,this}function SetCache(values){var index=-1,length=null==values?0:values.length;for(this.__data__=new MapCache;++index<length;)this.add(values[index])}function setCacheAdd(value){return this.__data__.set(value,HASH_UNDEFINED),this}function setCacheHas(value){return this.__data__.has(value)}function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size}function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(key){var data=this.__data__,result=data.delete(key);return this.size=data.size,result}function stackGet(key){return this.__data__.get(key)}function stackHas(key){return this.__data__.has(key)}function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1)return pairs.push([key,value]),this.size=++data.size,this;data=this.__data__=new MapCache(pairs)}return data.set(key,value),this.size=data.size,this}function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value)!inherited&&!hasOwnProperty.call(value,key)||skipIndexes&&("length"==key||isBuff&&("offset"==key||"parent"==key)||isType&&("buffer"==key||"byteLength"==key||"byteOffset"==key)||isIndex(key,length))||result.push(key);return result}function assignMergeValue(object,key,value){(value===undefined||eq(object[key],value))&&(value!==undefined||key in object)||baseAssignValue(object,key,value)}function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(value!==undefined||key in object)||baseAssignValue(object,key,value)}function assocIndexOf(array,key){for(var length=array.length;length--;)if(eq(array[length][0],key))return length;return-1}function baseAssign(object,source){return object&&copyObject(source,keys(source),object)}function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object)}function baseAssignValue(object,key,value){"__proto__"==key&&defineProperty?defineProperty(object,key,{configurable:!0,enumerable:!0,value:value,writable:!0}):object[key]=value}function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer&&(result=object?customizer(value,key,object,stack):customizer(value)),result!==undefined)return result;if(!isObject(value))return value;var isArr=isArray(value);if(isArr){if(result=initCloneArray(value),!isDeep)return copyArray(value,result)}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value))return cloneBuffer(value,isDeep);if(tag==objectTag||tag==argsTag||isFunc&&!object){if(result=isFlat||isFunc?{}:initCloneObject(value),!isDeep)return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value))}else{if(!cloneableTags[tag])return object?value:{};result=initCloneByTag(value,tag,baseClone,isDeep)}}stack||(stack=new Stack);var stacked=stack.get(value);if(stacked)return stacked;stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys,props=isArr?undefined:keysFunc(value);return arrayEach(props||value,function(subValue,key){props&&(key=subValue,subValue=value[key]),assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack))}),result}function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=!0,length=array.length,result=[],valuesLength=values.length;if(!length)return result;iteratee&&(values=arrayMap(values,baseUnary(iteratee))),comparator?(includes=arrayIncludesWith,isCommon=!1):values.length>=LARGE_ARRAY_SIZE&&(includes=cacheHas,isCommon=!1,values=new SetCache(values));outer:for(;++index<length;){var value=array[index],computed=null==iteratee?value:iteratee(value);if(value=comparator||0!==value?value:0,isCommon&&computed===computed){for(var valuesIndex=valuesLength;valuesIndex--;)if(values[valuesIndex]===computed)continue outer;result.push(value)}else includes(values,computed,comparator)||result.push(value)}return result}function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key])})}function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object))}function baseGetTag(value){return null==value?value===undefined?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value)}function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag}function baseIsNative(value){return!(!isObject(value)||isMasked(value))&&(isFunction(value)?reIsNative:reIsHostCtor).test(toSource(value))}function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)]}function baseKeys(object){if(!isPrototype(object))return nativeKeys(object);var result=[];for(var key in Object(object))hasOwnProperty.call(object,key)&&"constructor"!=key&&result.push(key);return result}function baseKeysIn(object){if(!isObject(object))return nativeKeysIn(object);var isProto=isPrototype(object),result=[];for(var key in object)("constructor"!=key||!isProto&&hasOwnProperty.call(object,key))&&result.push(key);return result}function baseMerge(object,source,srcIndex,customizer,stack){object!==source&&baseFor(source,function(srcValue,key){if(isObject(srcValue))stack||(stack=new Stack),baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);else{var newValue=customizer?customizer(object[key],srcValue,key+"",object,source,stack):undefined;newValue===undefined&&(newValue=srcValue),assignMergeValue(object,key,newValue)}},keysIn)}function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked)return void assignMergeValue(object,key,stacked);var newValue=customizer?customizer(objValue,srcValue,key+"",object,source,stack):undefined,isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue,isArr||isBuff||isTyped?isArray(objValue)?newValue=objValue:isArrayLikeObject(objValue)?newValue=copyArray(objValue):isBuff?(isCommon=!1,newValue=cloneBuffer(srcValue,!0)):isTyped?(isCommon=!1,newValue=cloneTypedArray(srcValue,!0)):newValue=[]:isPlainObject(srcValue)||isArguments(srcValue)?(newValue=objValue,isArguments(objValue)?newValue=toPlainObject(objValue):(!isObject(objValue)||srcIndex&&isFunction(objValue))&&(newValue=initCloneObject(srcValue))):isCommon=!1}isCommon&&(stack.set(srcValue,newValue),mergeFunc(newValue,srcValue,srcIndex,customizer,stack),stack.delete(srcValue)),assignMergeValue(object,key,newValue)}function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}function baseSlice(array,start,end){var index=-1,length=array.length;start<0&&(start=-start>length?0:length+start),end=end>length?length:end,end<0&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);++index<length;)result[index]=array[index+start];return result}function baseToString(value){if("string"==typeof value)return value;if(isArray(value))return arrayMap(value,baseToString)+"";if(isSymbol(value))return symbolToString?symbolToString.call(value):"";var result=value+"";return"0"==result&&1/value==-INFINITY?"-0":result}function castSlice(array,start,end){var length=array.length;return end=end===undefined?length:end,!start&&end>=length?array:baseSlice(array,start,end)}function cloneBuffer(buffer,isDeep){if(isDeep)return buffer.slice();var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);return buffer.copy(result),result}function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);return new Uint8Array(result).set(new Uint8Array(arrayBuffer)),result}function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)}function cloneMap(map,isDeep,cloneFunc){return arrayReduce(isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map),addMapEntry,new map.constructor)}function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));return result.lastIndex=regexp.lastIndex,result}function cloneSet(set,isDeep,cloneFunc){return arrayReduce(isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set),addSetEntry,new set.constructor)}function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{}}function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)}function copyArray(source,array){var index=-1,length=source.length;for(array||(array=Array(length));++index<length;)array[index]=source[index];return array}function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});for(var index=-1,length=props.length;++index<length;){var key=props[index],newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;newValue===undefined&&(newValue=source[key]),isNew?baseAssignValue(object,key,newValue):assignValue(object,key,newValue)}return object}function copySymbols(source,object){return copyObject(source,getSymbols(source),object)}function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object)}function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;for(customizer=assigner.length>3&&"function"==typeof customizer?(length--,customizer):undefined,guard&&isIterateeCall(sources[0],sources[1],guard)&&(customizer=length<3?undefined:customizer,length=1),object=Object(object);++index<length;){var source=sources[index];source&&assigner(object,source,index,customizer)}return object})}function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols)}function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn)}function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data["string"==typeof key?"string":"hash"]:data.map}function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined}function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result}function initCloneArray(array){var length=array.length,result=array.constructor(length);return length&&"string"==typeof array[0]&&hasOwnProperty.call(array,"index")&&(result.index=array.index,result.input=array.input),result}function initCloneObject(object){return"function"!=typeof object.constructor||isPrototype(object)?{}:baseCreate(getPrototype(object))}function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object)}}function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}function isIndex(value,length){return!!(length=null==length?MAX_SAFE_INTEGER:length)&&("number"==typeof value||reIsUint.test(value))&&value>-1&&value%1==0&&value<length}function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;return!!("number"==type?isArrayLike(object)&&isIndex(index,object.length):"string"==type&&index in object)&&eq(object[index],value)}function isKeyable(value){var type=typeof value;return"string"==type||"number"==type||"symbol"==type||"boolean"==type?"__proto__"!==value:null===value}function isMasked(func){return!!maskSrcKey&&maskSrcKey in func}function isPrototype(value){var Ctor=value&&value.constructor;return value===("function"==typeof Ctor&&Ctor.prototype||objectProto)}function nativeKeysIn(object){var result=[];if(null!=object)for(var key in Object(object))result.push(key);return result}function objectToString(value){return nativeObjectToString.call(value)}function overRest(func,start,transform){return start=nativeMax(start===undefined?func.length-1:start,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);++index<length;)array[index]=args[start+index];index=-1;for(var otherArgs=Array(start+1);++index<start;)otherArgs[index]=args[index];return otherArgs[start]=transform(array),apply(func,this,otherArgs)}}function toSource(func){if(null!=func){try{return funcToString.call(func)}catch(e){}try{return func+""}catch(e){}}return""}function compact(array){for(var index=-1,length=null==array?0:array.length,resIndex=0,result=[];++index<length;){var value=array[index];value&&(result[resIndex++]=value)}return result}function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection),fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;return fromIndex<0&&(fromIndex=nativeMax(length+fromIndex,0)),isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1}function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG)}function eq(value,other){return value===other||value!==value&&other!==other}function isArrayLike(value){return null!=value&&isLength(value.length)&&!isFunction(value)}function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}function isElement(value){return isObjectLike(value)&&1===value.nodeType&&!isPlainObject(value)}function isEmpty(value){if(null==value)return!0;if(isArrayLike(value)&&(isArray(value)||"string"==typeof value||"function"==typeof value.splice||isBuffer(value)||isTypedArray(value)||isArguments(value)))return!value.length;var tag=getTag(value);if(tag==mapTag||tag==setTag)return!value.size;if(isPrototype(value))return!baseKeys(value).length;for(var key in value)if(hasOwnProperty.call(value,key))return!1;return!0}function isFunction(value){if(!isObject(value))return!1;var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag}function isLength(value){return"number"==typeof value&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}function isObject(value){var type=typeof value;return null!=value&&("object"==type||"function"==type)}function isObjectLike(value){return null!=value&&"object"==typeof value}function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag)return!1;var proto=getPrototype(value);if(null===proto)return!0;var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}function isString(value){return"string"==typeof value||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag}function isSymbol(value){return"symbol"==typeof value||isObjectLike(value)&&baseGetTag(value)==symbolTag}function toFinite(value){if(!value)return 0===value?value:0;if((value=toNumber(value))===INFINITY||value===-INFINITY){return(value<0?-1:1)*MAX_INTEGER}return value===value?value:0}function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0}function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}function toPlainObject(value){return copyObject(value,keysIn(value))}function toString(value){return null==value?"":baseToString(value)}function functions(object){return null==object?[]:baseFunctions(object,keys(object))}function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object)}function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,!0):baseKeysIn(object)}function values(object){return null==object?[]:baseValues(object,keys(object))}function trim(string,chars,guard){if((string=toString(string))&&(guard||chars===undefined))return string.replace(reTrim,"");if(!string||!(chars=baseToString(chars)))return string;var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars);return castSlice(strSymbols,charsStartIndex(strSymbols,chrSymbols),charsEndIndex(strSymbols,chrSymbols)+1).join("")}function constant(value){return function(){return value}}function identity(value){return value}function stubArray(){return[]}function stubFalse(){return!1}var undefined,LARGE_ARRAY_SIZE=200,HASH_UNDEFINED="__lodash_hash_undefined__",CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4,HOT_COUNT=800,HOT_SPAN=16,INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e308,NAN=NaN,argsTag="[object Arguments]",asyncTag="[object AsyncFunction]",boolTag="[object Boolean]",dateTag="[object Date]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",nullTag="[object Null]",objectTag="[object Object]",proxyTag="[object Proxy]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",undefinedTag="[object Undefined]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reTrim=/^\s+|\s+$/g,reFlags=/\w*$/,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsHostCtor=/^\[object .+?Constructor\]$/,reIsOctal=/^0o[0-7]+$/i,reIsUint=/^(?:0|[1-9]\d*)$/,rsComboRange="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",rsCombo="["+rsComboRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",rsOptJoin="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+rsOptJoin,rsSymbol="(?:"+["[^\\ud800-\\udfff]"+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,"[\\ud800-\\udfff]"].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g"),reHasUnicode=RegExp("[\\u200d\\ud800-\\udfff"+rsComboRange+"\\ufe0e\\ufe0f]"),typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags["[object Array]"]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags["[object Error]"]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var cloneableTags={};cloneableTags[argsTag]=cloneableTags["[object Array]"]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags["[object Error]"]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1;var freeParseInt=parseInt,freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}(),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return uid?"Symbol(src)_1."+uid:""}(),nativeObjectToString=objectProto.toString,objectCtorString=funcToString.call(Object),reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Buffer=moduleExports?root.Buffer:undefined,Symbol=root.Symbol,Uint8Array=root.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symToStringTag=Symbol?Symbol.toStringTag:undefined,defineProperty=function(){try{var func=getNative(Object,"defineProperty");return func({},"",{}),func}catch(e){}}(),nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeNow=Date.now,DataView=getNative(root,"DataView"),Map=getNative(root,"Map"),Promise=getNative(root,"Promise"),Set=getNative(root,"Set"),WeakMap=getNative(root,"WeakMap"),nativeCreate=getNative(Object,"create"),dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined,baseCreate=function(){function object(){}return function(proto){if(!isObject(proto))return{};if(objectCreate)return objectCreate(proto);object.prototype=proto;var result=new object;return object.prototype=undefined,result}}();Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;var baseFor=function(fromRight){return function(object,iteratee,keysFunc){for(var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;length--;){var key=props[fromRight?length:++index];if(!1===iteratee(iterable[key],key,iterable))break}return object}}(),baseSetToString=defineProperty?function(func,string){return defineProperty(func,"toString",{configurable:!0,enumerable:!1,value:constant(string),writable:!0})}:identity,getSymbols=nativeGetSymbols?function(object){return null==object?[]:(object=Object(object),arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol)}))}:stubArray,getSymbolsIn=nativeGetSymbols?function(object){for(var result=[];object;)arrayPush(result,getSymbols(object)),object=getPrototype(object);return result}:stubArray,getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&"[object Promise]"!=getTag(Promise.resolve())||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):"";if(ctorString)switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return"[object Promise]";case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return result});var setToString=function(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);if(lastCalled=stamp,remaining>0){if(++count>=HOT_COUNT)return arguments[0]}else count=0;return func.apply(undefined,arguments)}}(baseSetToString),difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,!0)):[]}),isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,"callee")&&!propertyIsEnumerable.call(value,"callee")},isArray=Array.isArray,isBuffer=nativeIsBuffer||stubFalse,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source))return void copyObject(source,keys(source),object);for(var key in source)hasOwnProperty.call(source,key)&&assignValue(object,key,source[key])}),merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex)});return lodash.assign=assign,lodash.compact=compact,lodash.constant=constant,lodash.difference=difference,lodash.functions=functions,lodash.keys=keys,lodash.keysIn=keysIn,lodash.merge=merge,lodash.toPlainObject=toPlainObject,lodash.values=values,lodash.cloneDeep=cloneDeep,lodash.eq=eq,lodash.identity=identity,lodash.includes=includes,lodash.isArguments=isArguments,lodash.isArray=isArray,lodash.isArrayLike=isArrayLike,lodash.isArrayLikeObject=isArrayLikeObject,lodash.isBuffer=isBuffer,lodash.isElement=isElement,lodash.isEmpty=isEmpty,lodash.isFunction=isFunction,lodash.isLength=isLength,lodash.isObject=isObject,lodash.isObjectLike=isObjectLike,lodash.isPlainObject=isPlainObject,lodash.isString=isString,lodash.isSymbol=isSymbol,lodash.isTypedArray=isTypedArray,lodash.stubArray=stubArray,lodash.stubFalse=stubFalse,lodash.toFinite=toFinite,lodash.toInteger=toInteger,lodash.toNumber=toNumber,lodash.toString=toString,lodash.trim=trim,lodash.VERSION="4.17.4",lodash}.call(this);return allStrings=function(list){var item,j,len;for(j=0,len=list.length;j<len;j++)if(item=list[j],!Util.isString(item))return!1;return!0},without=function(array,item){var i,length,newArray;for(newArray=[],i=-1,length=array.length;++i<length;)array[i]!==item&&newArray.push(array[i]);return newArray},isNumberLike=function(value){return null!=value&&!isNaN(parseFloat(value))},smartEscape=function(string,unsafe){return null==unsafe&&(unsafe=/([^a-zA-Z0-9_.\-\/:]+)/g),string.replace(unsafe,function(match){return match.split("").map(function(c){return"%"+c.charCodeAt(0).toString(16).toUpperCase()}).join("")})},defaults=function(){var destination,sources;return destination=arguments[0],sources=2<=arguments.length?slice.call(arguments,1):[],sources.reduce(function(dest,source){var key,value;for(key in source)value=source[key],void 0===dest[key]&&(dest[key]=value);return dest},destination)},objectProto=Object.prototype,objToString=objectProto.toString,isObject=function(value){var type;return type=typeof value,!!value&&("object"===type||"function"===type)},funcTag="[object Function]",isFunction=function(value){return isObject(value)&&objToString.call(value)===funcTag},reWords=function(){var lower,upper;return upper="[A-Z]",lower="[a-z]+",RegExp(upper+"+(?="+upper+lower+")|"+upper+"?"+lower+"|"+upper+"+|[0-9]+","g")}(),camelCase=function(source){var i,word,words;return words=source.match(reWords),words=function(){var j,len,results;for(results=[],i=j=0,len=words.length;j<len;i=++j)word=words[i],word=word.toLocaleLowerCase(),i?results.push(word.charAt(0).toLocaleUpperCase()+word.slice(1)):results.push(word);return results}(),words.join("")},snakeCase=function(source){var i,word,words;return words=source.match(reWords),words=function(){var j,len,results;for(results=[],i=j=0,len=words.length;j<len;i=++j)word=words[i],results.push(word.toLocaleLowerCase());return results}(),words.join("_")},convertKeys=function(source,converter){var key,result,value;null==converter&&(converter=Util.identity),result={};for(key in source)value=source[key],key=converter(key),Util.isEmpty(key)||(result[key]=value);return result},withCamelCaseKeys=function(source){return convertKeys(source,Util.camelCase)},withSnakeCaseKeys=function(source){return convertKeys(source,Util.snakeCase)},base64Encode="undefined"!=typeof btoa&&isFunction(btoa)?btoa:"undefined"!=typeof Buffer&&isFunction(Buffer)?function(input){return input instanceof Buffer||(input=new Buffer.from(String(input),"binary")),input.toString("base64")}:function(input){throw new Error("No base64 encoding function found")},base64EncodeURL=function(input){try{input=decodeURI(input)}catch(error1){error1}return input=encodeURI(input),base64Encode(input)},BaseUtil={allStrings:allStrings,camelCase:camelCase,convertKeys:convertKeys,defaults:defaults,snakeCase:snakeCase,without:without,isFunction:isFunction,isNumberLike:isNumberLike,smartEscape:smartEscape,withCamelCaseKeys:withCamelCaseKeys,withSnakeCaseKeys:withSnakeCaseKeys,base64EncodeURL:base64EncodeURL},getData=function(element,name){var ref;switch(!1){case!(null==element):return;case!_.isFunction(element.getAttribute):return element.getAttribute("data-"+name);case!_.isFunction(element.getAttr):return element.getAttr("data-"+name);case!_.isFunction(element.data):return element.data(name);case!(_.isFunction("undefined"!=typeof jQuery&&null!==jQuery&&null!=(ref=jQuery.fn)?ref.data:void 0)&&_.isElement(element)):return jQuery(element).data(name)}},setData=function(element,name,value){var ref;switch(!1){case!(null==element):return;case!_.isFunction(element.setAttribute):return element.setAttribute("data-"+name,value);case!_.isFunction(element.setAttr):return element.setAttr("data-"+name,value);case!_.isFunction(element.data):return element.data(name,value);case!(_.isFunction("undefined"!=typeof jQuery&&null!==jQuery&&null!=(ref=jQuery.fn)?ref.data:void 0)&&_.isElement(element)):return jQuery(element).data(name,value)}},getAttribute=function(element,name){switch(!1){case!(null==element):return;case!_.isFunction(element.getAttribute):return element.getAttribute(name);case!_.isFunction(element.attr):return element.attr(name);case!_.isFunction(element.getAttr):return element.getAttr(name)}},setAttribute=function(element,name,value){switch(!1){case!(null==element):return;case!_.isFunction(element.setAttribute):return element.setAttribute(name,value);case!_.isFunction(element.attr):return element.attr(name,value);case!_.isFunction(element.setAttr):return element.setAttr(name,value)}},removeAttribute=function(element,name){switch(!1){case!(null==element):return;case!_.isFunction(element.removeAttribute):return element.removeAttribute(name);default:return setAttribute(element,void 0)}},setAttributes=function(element,attributes){var name,results,value;results=[];for(name in attributes)value=attributes[name],null!=value?results.push(setAttribute(element,name,value)):results.push(removeAttribute(element,name));return results},hasClass=function(element,name){if(_.isElement(element))return element.className.match(new RegExp("\\b"+name+"\\b"))},addClass=function(element,name){if(!element.className.match(new RegExp("\\b"+name+"\\b")))return element.className=_.trim(element.className+" "+name)},getStyles=function(elem){return elem.ownerDocument.defaultView.opener?elem.ownerDocument.defaultView.getComputedStyle(elem,null):window.getComputedStyle(elem,null)},["Top","Right","Bottom","Left"],contains=function(a,b){var adown,bup;return adown=9===a.nodeType?a.documentElement:a,bup=b&&b.parentNode,a===bup||!(!bup||1!==bup.nodeType||!adown.contains(bup))},domStyle=function(elem,name){if(elem&&3!==elem.nodeType&&8!==elem.nodeType&&elem.style)return elem.style[name]},curCSS=function(elem,name,computed){var maxWidth,minWidth,ret,rmargin,style,width;return rmargin=/^margin/,width=void 0,minWidth=void 0,maxWidth=void 0,ret=void 0,style=elem.style,computed=computed||getStyles(elem),computed&&(ret=computed.getPropertyValue(name)||computed[name]),computed&&(""!==ret||contains(elem.ownerDocument,elem)||(ret=domStyle(elem,name)),rnumnonpx.test(ret)&&rmargin.test(name)&&(width=style.width,minWidth=style.minWidth,maxWidth=style.maxWidth,style.minWidth=style.maxWidth=style.width=ret,ret=computed.width,style.width=width,style.minWidth=minWidth,style.maxWidth=maxWidth)),void 0!==ret?ret+"":ret},cssValue=function(elem,name,convert,styles){var val;return val=curCSS(elem,name,styles),convert?parseFloat(val):val},augmentWidthOrHeight=function(elem,name,extra,isBorderBox,styles){var j,len,side,sides,val;if(extra===(isBorderBox?"border":"content"))return 0;for(sides="width"===name?["Right","Left"]:["Top","Bottom"],val=0,j=0,len=sides.length;j<len;j++)side=sides[j],"margin"===extra&&(val+=cssValue(elem,extra+side,!0,styles)),isBorderBox?("content"===extra&&(val-=cssValue(elem,"padding"+side,!0,styles)),"margin"!==extra&&(val-=cssValue(elem,"border"+side+"Width",!0,styles))):(val+=cssValue(elem,"padding"+side,!0,styles),"padding"!==extra&&(val+=cssValue(elem,"border"+side+"Width",!0,styles)));return val},pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i"),getWidthOrHeight=function(elem,name,extra){var isBorderBox,styles,val,valueIsBorderBox;if(valueIsBorderBox=!0,val="width"===name?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox="border-box"===cssValue(elem,"boxSizing",!1,styles),val<=0||null==val){if(val=curCSS(elem,name,styles),(val<0||null==val)&&(val=elem.style[name]),rnumnonpx.test(val))return val;valueIsBorderBox=isBorderBox&&val===elem.style[name],val=parseFloat(val)||0}return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)},width=function(element){return getWidthOrHeight(element,"width","content")},Util=_.assign(BaseUtil,{hasClass:hasClass,addClass:addClass,getAttribute:getAttribute,setAttribute:setAttribute,removeAttribute:removeAttribute,setAttributes:setAttributes,getData:getData,setData:setData,width:width,isString:_.isString,isArray:_.isArray,isEmpty:_.isEmpty,assign:_.assign,merge:_.merge,cloneDeep:_.cloneDeep,compact:_.compact,contains:_.includes,difference:_.difference,functions:_.functions,identity:_.identity,isPlainObject:_.isPlainObject,trim:_.trim}),utf8_encode=function(argString){var c1,enc,end,n,start,string,stringl,utftext;if(null===argString||void 0===argString)return"";for(string=argString+"",utftext="",start=void 0,end=void 0,stringl=0,start=end=0,stringl=string.length,n=0;n<stringl;)c1=string.charCodeAt(n),enc=null,c1<128?end++:enc=c1>127&&c1<2048?String.fromCharCode(c1>>6|192,63&c1|128):String.fromCharCode(c1>>12|224,c1>>6&63|128,63&c1|128),null!==enc&&(end>start&&(utftext+=string.slice(start,end)),utftext+=enc,start=end=n+1),n++;return end>start&&(utftext+=string.slice(start,stringl)),utftext},crc32=function(str){var crc,i,iTop,table,x,y;for(str=utf8_encode(str),table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",crc=0,x=0,y=0,crc^=-1,i=0,iTop=str.length;i<iTop;)y=255&(crc^str.charCodeAt(i)),x="0x"+table.substr(9*y,8),crc=crc>>>8^x,i++;return crc^=-1,crc<0&&(crc+=4294967296),crc},Layer=function(){function Layer(options){this.options={},null!=options&&["resourceType","type","publicId","format"].forEach(function(_this){return function(key){var ref;return _this.options[key]=null!=(ref=options[key])?ref:options[Util.snakeCase(key)]}}(this))}return Layer.prototype.resourceType=function(value){return this.options.resourceType=value,this},Layer.prototype.type=function(value){return this.options.type=value,this},Layer.prototype.publicId=function(value){return this.options.publicId=value,this},Layer.prototype.getPublicId=function(){var ref;return null!=(ref=this.options.publicId)?ref.replace(/\//g,":"):void 0},Layer.prototype.getFullPublicId=function(){return null!=this.options.format?this.getPublicId()+"."+this.options.format:this.getPublicId()},Layer.prototype.format=function(value){return this.options.format=value,this},Layer.prototype.toString=function(){var components;if(components=[],null==this.options.publicId)throw"Must supply publicId";return"image"!==this.options.resourceType&&components.push(this.options.resourceType),"upload"!==this.options.type&&components.push(this.options.type),components.push(this.getFullPublicId()),Util.compact(components).join(":")},Layer}(),FetchLayer=function(superClass){function FetchLayer(options){FetchLayer.__super__.constructor.call(this,options),Util.isString(options)?this.options.url=options:(null!=options?options.url:void 0)&&(this.options.url=options.url)}return extend(FetchLayer,superClass),FetchLayer.prototype.url=function(url){return this.options.url=url,this},FetchLayer.prototype.toString=function(){return"fetch:"+cloudinary.Util.base64EncodeURL(this.options.url)},FetchLayer}(Layer),TextLayer=function(superClass){function TextLayer(options){var keys;TextLayer.__super__.constructor.call(this,options),keys=["resourceType","resourceType","fontFamily","fontSize","fontWeight","fontStyle","textDecoration","textAlign","stroke","letterSpacing","lineSpacing","text"],null!=options&&keys.forEach(function(_this){return function(key){var ref;return _this.options[key]=null!=(ref=options[key])?ref:options[Util.snakeCase(key)]}}(this)),this.options.resourceType="text"}return extend(TextLayer,superClass),TextLayer.prototype.resourceType=function(resourceType){throw"Cannot modify resourceType for text layers"},TextLayer.prototype.type=function(type){throw"Cannot modify type for text layers"},TextLayer.prototype.format=function(format){throw"Cannot modify format for text layers"},TextLayer.prototype.fontFamily=function(fontFamily){return this.options.fontFamily=fontFamily,this},TextLayer.prototype.fontSize=function(fontSize){return this.options.fontSize=fontSize,this},TextLayer.prototype.fontWeight=function(fontWeight){return this.options.fontWeight=fontWeight,this},TextLayer.prototype.fontStyle=function(fontStyle){return this.options.fontStyle=fontStyle,this},TextLayer.prototype.textDecoration=function(textDecoration){return this.options.textDecoration=textDecoration,this},TextLayer.prototype.textAlign=function(textAlign){return this.options.textAlign=textAlign,this},TextLayer.prototype.stroke=function(stroke){return this.options.stroke=stroke,this},TextLayer.prototype.letterSpacing=function(letterSpacing){return this.options.letterSpacing=letterSpacing,this},TextLayer.prototype.lineSpacing=function(lineSpacing){return this.options.lineSpacing=lineSpacing,this},TextLayer.prototype.text=function(text){return this.options.text=text,this},TextLayer.prototype.toString=function(){var components,hasPublicId,hasStyle,publicId,re,res,start,style,text,textSource;if(style=this.textStyleIdentifier(),null!=this.options.publicId&&(publicId=this.getFullPublicId()),null!=this.options.text){if(hasPublicId=!Util.isEmpty(publicId),hasStyle=!Util.isEmpty(style),hasPublicId&&hasStyle||!hasPublicId&&!hasStyle)throw"Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";for(re=/\$\([a-zA-Z]\w*\)/g,start=0,textSource=Util.smartEscape(this.options.text,/[,\/]/g),text="";res=re.exec(textSource);)text+=Util.smartEscape(textSource.slice(start,res.index)),text+=res[0],start=res.index+res[0].length;text+=Util.smartEscape(textSource.slice(start))}return components=[this.options.resourceType,style,publicId,text],Util.compact(components).join(":")},TextLayer.prototype.textStyleIdentifier=function(){var components;if(components=[],"normal"!==this.options.fontWeight&&components.push(this.options.fontWeight),"normal"!==this.options.fontStyle&&components.push(this.options.fontStyle),"none"!==this.options.textDecoration&&components.push(this.options.textDecoration),components.push(this.options.textAlign),"none"!==this.options.stroke&&components.push(this.options.stroke),Util.isEmpty(this.options.letterSpacing)&&!Util.isNumberLike(this.options.letterSpacing)||components.push("letter_spacing_"+this.options.letterSpacing),Util.isEmpty(this.options.lineSpacing)&&!Util.isNumberLike(this.options.lineSpacing)||components.push("line_spacing_"+this.options.lineSpacing),!Util.isEmpty(Util.compact(components))){if(Util.isEmpty(this.options.fontFamily))throw"Must supply fontFamily. "+components;if(Util.isEmpty(this.options.fontSize)&&!Util.isNumberLike(this.options.fontSize))throw"Must supply fontSize."}return components.unshift(this.options.fontFamily,this.options.fontSize),components=Util.compact(components).join("_")},TextLayer}(Layer),SubtitlesLayer=function(superClass){function SubtitlesLayer(options){SubtitlesLayer.__super__.constructor.call(this,options),this.options.resourceType="subtitles"}return extend(SubtitlesLayer,superClass),SubtitlesLayer}(TextLayer),Param=function(){function Param(name,shortName,process){null==process&&(process=cloudinary.Util.identity),this.name=name,this.shortName=shortName,this.process=process}return Param.prototype.set=function(origValue){return this.origValue=origValue,this},Param.prototype.serialize=function(){var val,valid;return val=this.value(),valid=cloudinary.Util.isArray(val)||cloudinary.Util.isPlainObject(val)||cloudinary.Util.isString(val)?!cloudinary.Util.isEmpty(val):null!=val,null!=this.shortName&&valid?this.shortName+"_"+val:""},Param.prototype.value=function(){return this.process(this.origValue)},Param.norm_color=function(value){return null!=value?value.replace(/^#/,"rgb:"):void 0},Param.prototype.build_array=function(arg){return null==arg&&(arg=[]),cloudinary.Util.isArray(arg)?arg:[arg]},Param.process_video_params=function(param){var video;switch(param.constructor){case Object:return video="","codec"in param&&(video=param.codec,"profile"in param&&(video+=":"+param.profile,"level"in param&&(video+=":"+param.level))),video;case String:return param;default:return null}},Param}(),ArrayParam=function(superClass){function ArrayParam(name,shortName,sep,process){null==sep&&(sep="."),this.sep=sep,ArrayParam.__super__.constructor.call(this,name,shortName,process)}return extend(ArrayParam,superClass),ArrayParam.prototype.serialize=function(){var arrayValue,flat,t;return null!=this.shortName?(arrayValue=this.value(),cloudinary.Util.isEmpty(arrayValue)?"":cloudinary.Util.isString(arrayValue)?this.shortName+"_"+arrayValue:(flat=function(){var j,len,results;for(results=[],j=0,len=arrayValue.length;j<len;j++)t=arrayValue[j],cloudinary.Util.isFunction(t.serialize)?results.push(t.serialize()):results.push(t);return results}(),this.shortName+"_"+flat.join(this.sep))):""},ArrayParam.prototype.value=function(){var j,len,ref,results,v;if(cloudinary.Util.isArray(this.origValue)){for(ref=this.origValue,results=[],j=0,len=ref.length;j<len;j++)v=ref[j],results.push(this.process(v));return results}return this.process(this.origValue)},ArrayParam.prototype.set=function(origValue){return null==origValue||cloudinary.Util.isArray(origValue)?ArrayParam.__super__.set.call(this,origValue):ArrayParam.__super__.set.call(this,[origValue])},ArrayParam}(Param),TransformationParam=function(superClass){function TransformationParam(name,shortName,sep,process){null==shortName&&(shortName="t"),null==sep&&(sep="."),this.sep=sep,TransformationParam.__super__.constructor.call(this,name,shortName,process)}return extend(TransformationParam,superClass),TransformationParam.prototype.serialize=function(){var joined,result,t;return cloudinary.Util.isEmpty(this.value())?"":cloudinary.Util.allStrings(this.value())?(joined=this.value().join(this.sep),cloudinary.Util.isEmpty(joined)?"":this.shortName+"_"+joined):(result=function(){var j,len,ref,results;for(ref=this.value(),results=[],j=0,len=ref.length;j<len;j++)null!=(t=ref[j])&&(cloudinary.Util.isString(t)&&!cloudinary.Util.isEmpty(t)?results.push(this.shortName+"_"+t):cloudinary.Util.isFunction(t.serialize)?results.push(t.serialize()):cloudinary.Util.isPlainObject(t)&&!cloudinary.Util.isEmpty(t)?results.push(new Transformation(t).serialize()):results.push(void 0));return results}.call(this),cloudinary.Util.compact(result))},TransformationParam.prototype.set=function(origValue1){return this.origValue=origValue1,cloudinary.Util.isArray(this.origValue)?TransformationParam.__super__.set.call(this,this.origValue):TransformationParam.__super__.set.call(this,[this.origValue])},TransformationParam}(Param),RangeParam=function(superClass){function RangeParam(name,shortName,process){null==process&&(process=this.norm_range_value),RangeParam.__super__.constructor.call(this,name,shortName,process)}return extend(RangeParam,superClass),RangeParam.norm_range_value=function(value){var modifier,offset;return offset=String(value).match(new RegExp("^"+offset_any_pattern+"$")),offset&&(modifier=null!=offset[5]?"p":"",value=(offset[1]||offset[4])+modifier),value},RangeParam}(Param),RawParam=function(superClass){function RawParam(name,shortName,process){null==process&&(process=cloudinary.Util.identity),RawParam.__super__.constructor.call(this,name,shortName,process)}return extend(RawParam,superClass),RawParam.prototype.serialize=function(){return this.value()},RawParam}(Param),LayerParam=function(superClass){function LayerParam(){return LayerParam.__super__.constructor.apply(this,arguments)}return extend(LayerParam,superClass),LayerParam.prototype.value=function(){var layerOptions,result;return layerOptions=this.origValue,cloudinary.Util.isPlainObject(layerOptions)?(layerOptions=Util.withCamelCaseKeys(layerOptions),result="text"===layerOptions.resourceType||null!=layerOptions.text?new cloudinary.TextLayer(layerOptions).toString():"subtitles"===layerOptions.resourceType?new cloudinary.SubtitlesLayer(layerOptions).toString():"fetch"===layerOptions.resourceType||null!=layerOptions.url?new cloudinary.FetchLayer(layerOptions).toString():new cloudinary.Layer(layerOptions).toString()):result=/^fetch:.+/.test(layerOptions)?new FetchLayer(layerOptions.substr(6)).toString():layerOptions,result},[["font_weight","normal"],["font_style","normal"],["text_decoration","none"],["text_align",null],["stroke","none"],["letter_spacing",null],["line_spacing",null]],LayerParam.prototype.textStyle=function(layer){return new cloudinary.TextLayer(layer).textStyleIdentifier()},LayerParam}(Param),ExpressionParam=function(superClass){function ExpressionParam(){return ExpressionParam.__super__.constructor.apply(this,arguments)}return extend(ExpressionParam,superClass),ExpressionParam.prototype.serialize=function(){return Expression.normalize(ExpressionParam.__super__.serialize.call(this))},ExpressionParam}(Param),parameters={},parameters.Param=Param,parameters.ArrayParam=ArrayParam,parameters.RangeParam=RangeParam,parameters.RawParam=RawParam,parameters.TransformationParam=TransformationParam,parameters.LayerParam=LayerParam,parameters.ExpressionParam=ExpressionParam,Expression=function(){function Expression(expressionStr){this.expressions=[],null!=expressionStr&&this.expressions.push(Expression.normalize(expressionStr))}return Expression.OPERATORS={"=":"eq","!=":"ne","<":"lt",">":"gt","<=":"lte",">=":"gte","&&":"and","||":"or","*":"mul","/":"div","+":"add","-":"sub"},Expression.PREDEFINED_VARS={aspect_ratio:"ar",aspectRatio:"ar",current_page:"cp",currentPage:"cp",face_count:"fc",faceCount:"fc",height:"h",initial_aspect_ratio:"iar",initial_height:"ih",initial_width:"iw",initialAspectRatio:"iar",initialHeight:"ih",initialWidth:"iw",page_count:"pc",page_x:"px",page_y:"py",pageCount:"pc",pageX:"px",pageY:"py",tags:"tags",width:"w"},Expression.BOUNDRY="[ _]+",Expression.new=function(expressionStr){return new this(expressionStr)},Expression.normalize=function(expression){var operators,pattern,replaceRE;return null==expression?expression:(expression=String(expression),operators="\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*",pattern="(("+operators+")(?=[ _])|"+Object.keys(Expression.PREDEFINED_VARS).join("|")+")",replaceRE=new RegExp(pattern,"g"),expression=expression.replace(replaceRE,function(match){return Expression.OPERATORS[match]||Expression.PREDEFINED_VARS[match]}),expression.replace(/[ _]+/g,"_"))},Expression.prototype.serialize=function(){return Expression.normalize(this.expressions.join("_"))},Expression.prototype.toString=function(){return this.serialize()},Expression.prototype.getParent=function(){return this.parent},Expression.prototype.setParent=function(parent){return this.parent=parent,this},Expression.prototype.predicate=function(name,operator,value){return null!=Expression.OPERATORS[operator]&&(operator=Expression.OPERATORS[operator]),this.expressions.push(name+"_"+operator+"_"+value),this},Expression.prototype.and=function(){return this.expressions.push("and"),this},Expression.prototype.or=function(){return this.expressions.push("or"),this},Expression.prototype.then=function(){return this.getParent().if(this.toString())},Expression.prototype.height=function(operator,value){return this.predicate("h",operator,value)},Expression.prototype.width=function(operator,value){return this.predicate("w",operator,value)},Expression.prototype.aspectRatio=function(operator,value){return this.predicate("ar",operator,value)},Expression.prototype.pageCount=function(operator,value){return this.predicate("pc",operator,value)},Expression.prototype.faceCount=function(operator,value){return this.predicate("fc",operator,value)},Expression.prototype.value=function(value){return this.expressions.push(value),this},Expression.variable=function(name,value){return new this(name).value(value)},Expression.width=function(){return new this("width")},Expression.height=function(){return new this("height")},Expression.initialWidth=function(){return new this("initialWidth")},Expression.initialHeight=function(){return new this("initialHeight")},Expression.aspectRatio=function(){return new this("aspectRatio")},Expression.initialAspectRatio=function(){return new this("initialAspectRatio")},Expression.pageCount=function(){return new this("pageCount")},function(){return new this("faceCount")},Expression.currentPage=function(){return new this("currentPage")},Expression.tags=function(){return new this("tags")},Expression.pageX=function(){return new this("pageX")},Expression.pageY=function(){return new this("pageY")},Expression}(),Condition=function(superClass){function Condition(conditionStr){Condition.__super__.constructor.call(this,conditionStr)}return extend(Condition,superClass),Condition.prototype.height=function(operator,value){return this.predicate("h",operator,value)},Condition.prototype.width=function(operator,value){return this.predicate("w",operator,value)},Condition.prototype.aspectRatio=function(operator,value){return this.predicate("ar",operator,value)},Condition.prototype.pageCount=function(operator,value){return this.predicate("pc",operator,value)},Condition.prototype.faceCount=function(operator,value){return this.predicate("fc",operator,value)},Condition}(Expression),Configuration=function(){function Configuration(options){null==options&&(options={}),this.configuration=Util.cloneDeep(options),Util.defaults(this.configuration,DEFAULT_CONFIGURATION_PARAMS)}var DEFAULT_CONFIGURATION_PARAMS,ref;return DEFAULT_CONFIGURATION_PARAMS={responsive_class:"cld-responsive",responsive_use_breakpoints:!0,round_dpr:!0,secure:"https:"===("undefined"!=typeof window&&null!==window&&null!=(ref=window.location)?ref.protocol:void 0)},Configuration.CONFIG_PARAMS=["api_key","api_secret","callback","cdn_subdomain","cloud_name","cname","private_cdn","protocol","resource_type","responsive","responsive_class","responsive_use_breakpoints","responsive_width","round_dpr","secure","secure_cdn_subdomain","secure_distribution","shorten","type","upload_preset","url_suffix","use_root_path","version"],Configuration.prototype.init=function(){return this.fromEnvironment(),this.fromDocument(),this},Configuration.prototype.set=function(name,value){return this.configuration[name]=value,this},Configuration.prototype.get=function(name){return this.configuration[name]},Configuration.prototype.merge=function(config){return null==config&&(config={}),Util.assign(this.configuration,Util.cloneDeep(config)),this},Configuration.prototype.fromDocument=function(){var el,j,len,meta_elements;if(meta_elements="undefined"!=typeof document&&null!==document?document.querySelectorAll('meta[name^="cloudinary_"]'):void 0)for(j=0,len=meta_elements.length;j<len;j++)el=meta_elements[j],this.configuration[el.getAttribute("name").replace("cloudinary_","")]=el.getAttribute("content");return this},Configuration.prototype.fromEnvironment=function(){var cloudinary_url,j,k,len,query,ref1,ref2,ref3,uri,uriRegex,v,value;if(null!=(cloudinary_url="undefined"!=typeof process&&null!==process&&null!=(ref1=process.env)?ref1.CLOUDINARY_URL:void 0)&&(uriRegex=/cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/,(uri=uriRegex.exec(cloudinary_url))&&(null!=uri[3]&&(this.configuration.cloud_name=uri[3]),null!=uri[1]&&(this.configuration.api_key=uri[1]),null!=uri[2]&&(this.configuration.api_secret=uri[2]),null!=uri[4]&&(this.configuration.private_cdn=null!=uri[4]),null!=uri[4]&&(this.configuration.secure_distribution=uri[4]),null!=(query=uri[5]))))for(ref2=query.split("&"),j=0,len=ref2.length;j<len;j++)value=ref2[j],ref3=value.split("="),k=ref3[0],v=ref3[1],null==v&&(v=!0),this.configuration[k]=v;return this},Configuration.prototype.config=function(new_config,new_value){switch(!1){case void 0===new_value:return this.set(new_config,new_value),this.configuration;case!Util.isString(new_config):return this.get(new_config);case!Util.isPlainObject(new_config):return this.merge(new_config),this.configuration;default:return this.configuration}},Configuration.prototype.toOptions=function(){return Util.cloneDeep(this.configuration)},Configuration}(),TransformationBase=function(){function TransformationBase(options){var parent,trans;null==options&&(options={}),parent=void 0,trans={},this.toOptions||(this.toOptions=function(withChain){var key,list,opt,ref,ref1,tr,value;null==withChain&&(withChain=!0),opt={};for(key in trans)value=trans[key],opt[key]=value.origValue;ref=this.otherOptions;for(key in ref)void 0!==(value=ref[key])&&(opt[key]=value);if(withChain&&!Util.isEmpty(this.chained)){list=function(){var j,len,ref1,results;for(ref1=this.chained,results=[],j=0,len=ref1.length;j<len;j++)tr=ref1[j],results.push(tr.toOptions());return results}.call(this),list.push(opt),opt={},ref1=this.otherOptions;for(key in ref1)void 0!==(value=ref1[key])&&(opt[key]=value);opt.transformation=list}return opt}),this.setParent||(this.setParent=function(object){return parent=object,null!=object&&this.fromOptions("function"==typeof object.toOptions?object.toOptions():void 0),this}),this.getParent||(this.getParent=function(){return parent}),this.param||(this.param=function(value,name,abbr,defaultValue,process){return null==process&&(process=Util.isFunction(defaultValue)?defaultValue:Util.identity),trans[name]=new Param(name,abbr,process).set(value),this}),this.rawParam||(this.rawParam=function(value,name,abbr,defaultValue,process){return null==process&&(process=Util.identity),process=lastArgCallback(arguments),trans[name]=new RawParam(name,abbr,process).set(value),this}),this.rangeParam||(this.rangeParam=function(value,name,abbr,defaultValue,process){return null==process&&(process=Util.identity),process=lastArgCallback(arguments),trans[name]=new RangeParam(name,abbr,process).set(value),this}),this.arrayParam||(this.arrayParam=function(value,name,abbr,sep,defaultValue,process){return null==sep&&(sep=":"),null==defaultValue&&(defaultValue=[]),null==process&&(process=Util.identity),process=lastArgCallback(arguments),trans[name]=new ArrayParam(name,abbr,sep,process).set(value),this}),this.transformationParam||(this.transformationParam=function(value,name,abbr,sep,defaultValue,process){return null==sep&&(sep="."),null==process&&(process=Util.identity),process=lastArgCallback(arguments),trans[name]=new TransformationParam(name,abbr,sep,process).set(value),this}),this.layerParam||(this.layerParam=function(value,name,abbr){return trans[name]=new LayerParam(name,abbr).set(value),this}),this.getValue||(this.getValue=function(name){var ref,ref1;return null!=(ref=null!=(ref1=trans[name])?ref1.value():void 0)?ref:this.otherOptions[name]}),this.get||(this.get=function(name){return trans[name]}),this.remove||(this.remove=function(name){var temp;switch(!1){case null==trans[name]:return temp=trans[name],delete trans[name],temp.origValue;case null==this.otherOptions[name]:return temp=this.otherOptions[name],delete this.otherOptions[name],temp;default:return null}}),this.keys||(this.keys=function(){var key;return function(){var results;results=[];for(key in trans)null!=key&&results.push(key.match(VAR_NAME_RE)?key:Util.snakeCase(key));return results}().sort()}),this.toPlainObject||(this.toPlainObject=function(){var hash,key,list,tr;hash={};for(key in trans)hash[key]=trans[key].value(),Util.isPlainObject(hash[key])&&(hash[key]=Util.cloneDeep(hash[key]));return Util.isEmpty(this.chained)||(list=function(){var j,len,ref,results;for(ref=this.chained,results=[],j=0,len=ref.length;j<len;j++)tr=ref[j],results.push(tr.toPlainObject());return results}.call(this),list.push(hash),hash={transformation:list}),hash}),this.chain||(this.chain=function(){var names,tr;return names=Object.getOwnPropertyNames(trans),0!==names.length&&(tr=new this.constructor(this.toOptions(!1)),this.resetTransformations(),this.chained.push(tr)),this}),this.resetTransformations||(this.resetTransformations=function(){return trans={},this}),this.otherOptions||(this.otherOptions={}),this.chained=[],Util.isEmpty(options)||this.fromOptions(options)}var VAR_NAME_RE,lastArgCallback,processVar;return VAR_NAME_RE=/^\$[a-zA-Z0-9]+$/,TransformationBase.prototype.trans_separator="/",TransformationBase.prototype.param_separator=",",lastArgCallback=function(args){var callback;return callback=null!=args?args[args.length-1]:void 0,Util.isFunction(callback)?callback:void 0},TransformationBase.prototype.fromOptions=function(options){var key,opt;if(options instanceof TransformationBase)this.fromTransformation(options);else{options||(options={}),(Util.isString(options)||Util.isArray(options))&&(options={transformation:options}),options=Util.cloneDeep(options,function(value){if(value instanceof TransformationBase)return new value.constructor(value.toOptions())}),options.if&&(this.set("if",options.if),delete options.if);for(key in options)opt=options[key],key.match(VAR_NAME_RE)?"$attr"!==key&&this.set("variable",key,opt):this.set(key,opt)}return this},TransformationBase.prototype.fromTransformation=function(other){var j,key,len,ref;if(other instanceof TransformationBase)for(ref=other.keys(),j=0,len=ref.length;j<len;j++)key=ref[j],this.set(key,other.get(key).origValue);return this},TransformationBase.prototype.set=function(){var camelKey,key,values;return key=arguments[0],values=2<=arguments.length?slice.call(arguments,1):[],camelKey=Util.camelCase(key),Util.contains(Transformation.methods,camelKey)?this[camelKey].apply(this,values):this.otherOptions[key]=values[0],this},TransformationBase.prototype.hasLayer=function(){return this.getValue("overlay")||this.getValue("underlay")},TransformationBase.prototype.serialize=function(){var ifParam,j,len,paramList,ref,ref1,ref2,ref3,ref4,resultArray,t,tr,transformationList,transformationString,transformations,value,variables,vars;for(resultArray=function(){var j,len,ref,results;for(ref=this.chained,results=[],j=0,len=ref.length;j<len;j++)tr=ref[j],results.push(tr.serialize());return results}.call(this),paramList=this.keys(),transformations=null!=(ref=this.get("transformation"))?ref.serialize():void 0,ifParam=null!=(ref1=this.get("if"))?ref1.serialize():void 0,variables=processVar(null!=(ref2=this.get("variables"))?ref2.value():void 0),paramList=Util.difference(paramList,["transformation","if","variables"]),vars=[],transformationList=[],j=0,len=paramList.length;j<len;j++)t=paramList[j],t.match(VAR_NAME_RE)?vars.push(t+"_"+Expression.normalize(null!=(ref3=this.get(t))?ref3.value():void 0)):transformationList.push(null!=(ref4=this.get(t))?ref4.serialize():void 0);switch(!1){case!Util.isString(transformations):transformationList.push(transformations);break;case!Util.isArray(transformations):resultArray=resultArray.concat(transformations)}return transformationList=function(){var l,len1,results;for(results=[],l=0,len1=transformationList.length;l<len1;l++)value=transformationList[l],(Util.isArray(value)&&!Util.isEmpty(value)||!Util.isArray(value)&&value)&&results.push(value);return results}(),transformationList=vars.sort().concat(variables).concat(transformationList.sort()),"if_end"===ifParam?transformationList.push(ifParam):Util.isEmpty(ifParam)||transformationList.unshift(ifParam),transformationString=Util.compact(transformationList).join(this.param_separator),Util.isEmpty(transformationString)||resultArray.push(transformationString),Util.compact(resultArray).join(this.trans_separator)},TransformationBase.prototype.listNames=function(){return Transformation.methods},TransformationBase.prototype.toHtmlAttributes=function(){var attrName,height,j,key,len,options,ref,ref1,ref2,ref3,value;options={},ref=this.otherOptions;for(key in ref)value=ref[key],Util.contains(Transformation.PARAM_NAMES,Util.snakeCase(key))||(attrName=/^html_/.test(key)?key.slice(5):key,options[attrName]=value);for(ref1=this.keys(),j=0,len=ref1.length;j<len;j++)key=ref1[j],/^html_/.test(key)&&(options[Util.camelCase(key.slice(5))]=this.getValue(key));return this.hasLayer()||this.getValue("angle")||Util.contains(["fit","limit","lfill"],this.getValue("crop"))||(width=null!=(ref2=this.get("width"))?ref2.origValue:void 0,height=null!=(ref3=this.get("height"))?ref3.origValue:void 0,parseFloat(width)>=1&&null==options.width&&(options.width=width),parseFloat(height)>=1&&null==options.height&&(options.height=height)),options},TransformationBase.prototype.isValidParamName=function(name){return Transformation.methods.indexOf(Util.camelCase(name))>=0},TransformationBase.prototype.toHtml=function(){var ref;return null!=(ref=this.getParent())&&"function"==typeof ref.toHtml?ref.toHtml():void 0},TransformationBase.prototype.toString=function(){return this.serialize()},processVar=function(varArray){var j,len,name,ref,results,v;if(Util.isArray(varArray)){for(results=[],j=0,len=varArray.length;j<len;j++)ref=varArray[j],name=ref[0],v=ref[1],results.push(name+"_"+Expression.normalize(v));return results}return varArray},TransformationBase}(),Transformation=function(superClass){function Transformation(options){null==options&&(options={}),Transformation.__super__.constructor.call(this,options)}return extend(Transformation,superClass),Transformation.new=function(args){return new Transformation(args)},Transformation.prototype.angle=function(value){return this.arrayParam(value,"angle","a",".",Expression.normalize)},Transformation.prototype.audioCodec=function(value){return this.param(value,"audio_codec","ac")},Transformation.prototype.audioFrequency=function(value){return this.param(value,"audio_frequency","af")},Transformation.prototype.aspectRatio=function(value){return this.param(value,"aspect_ratio","ar",Expression.normalize)},Transformation.prototype.background=function(value){return this.param(value,"background","b",Param.norm_color)},Transformation.prototype.bitRate=function(value){return this.param(value,"bit_rate","br")},Transformation.prototype.border=function(value){return this.param(value,"border","bo",function(border){return Util.isPlainObject(border)?(border=Util.assign({},{color:"black",width:2},border),border.width+"px_solid_"+Param.norm_color(border.color)):border})},Transformation.prototype.color=function(value){return this.param(value,"color","co",Param.norm_color)},Transformation.prototype.colorSpace=function(value){return this.param(value,"color_space","cs")},Transformation.prototype.crop=function(value){return this.param(value,"crop","c")},Transformation.prototype.defaultImage=function(value){return this.param(value,"default_image","d")},Transformation.prototype.delay=function(value){return this.param(value,"delay","dl")},Transformation.prototype.density=function(value){return this.param(value,"density","dn")},Transformation.prototype.duration=function(value){return this.rangeParam(value,"duration","du")},Transformation.prototype.dpr=function(value){return this.param(value,"dpr","dpr",function(_this){return function(dpr){return dpr=dpr.toString(),(null!=dpr?dpr.match(/^\d+$/):void 0)?dpr+".0":Expression.normalize(dpr)}}())},Transformation.prototype.effect=function(value){return this.arrayParam(value,"effect","e",":",Expression.normalize)},Transformation.prototype.else=function(){return this.if("else")},Transformation.prototype.endIf=function(){return this.if("end")},Transformation.prototype.endOffset=function(value){return this.rangeParam(value,"end_offset","eo")},Transformation.prototype.fallbackContent=function(value){return this.param(value,"fallback_content")},Transformation.prototype.fetchFormat=function(value){return this.param(value,"fetch_format","f")},Transformation.prototype.format=function(value){return this.param(value,"format")},Transformation.prototype.flags=function(value){return this.arrayParam(value,"flags","fl",".")},Transformation.prototype.gravity=function(value){return this.param(value,"gravity","g")},Transformation.prototype.height=function(value){return this.param(value,"height","h",function(_this){return function(){return _this.getValue("crop")||_this.getValue("overlay")||_this.getValue("underlay")?Expression.normalize(value):null}}(this))},Transformation.prototype.htmlHeight=function(value){return this.param(value,"html_height")},Transformation.prototype.htmlWidth=function(value){return this.param(value,"html_width")},Transformation.prototype.if=function(value){var i,ifVal,j,trIf,trRest;switch(null==value&&(value=""),value){case"else":return this.chain(),this.param(value,"if","if");case"end":for(this.chain(),i=j=this.chained.length-1;j>=0&&"end"!==(ifVal=this.chained[i].getValue("if"))&&(null==ifVal||(trIf=Transformation.new().if(ifVal),this.chained[i].remove("if"),trRest=this.chained[i],this.chained[i]=Transformation.new().transformation([trIf,trRest]),"else"===ifVal));i=j+=-1);return this.param(value,"if","if");case"":return Condition.new().setParent(this);default:return this.param(value,"if","if",function(value){return Condition.new(value).toString()})}},Transformation.prototype.keyframeInterval=function(value){return this.param(value,"keyframe_interval","ki")},Transformation.prototype.offset=function(value){var end_o,ref,start_o;if(ref=Util.isFunction(null!=value?value.split:void 0)?value.split(".."):Util.isArray(value)?value:[null,null],start_o=ref[0],end_o=ref[1],null!=start_o&&this.startOffset(start_o),null!=end_o)return this.endOffset(end_o)},Transformation.prototype.opacity=function(value){return this.param(value,"opacity","o",Expression.normalize)},Transformation.prototype.overlay=function(value){return this.layerParam(value,"overlay","l")},Transformation.prototype.page=function(value){return this.param(value,"page","pg")},Transformation.prototype.poster=function(value){return this.param(value,"poster")},Transformation.prototype.prefix=function(value){return this.param(value,"prefix","p")},Transformation.prototype.quality=function(value){return this.param(value,"quality","q",Expression.normalize)},Transformation.prototype.radius=function(value){return this.param(value,"radius","r",Expression.normalize)},Transformation.prototype.rawTransformation=function(value){return this.rawParam(value,"raw_transformation")},Transformation.prototype.size=function(value){var height,ref;if(Util.isFunction(null!=value?value.split:void 0))return ref=value.split("x"),width=ref[0],height=ref[1],this.width(width),this.height(height)},Transformation.prototype.sourceTypes=function(value){return this.param(value,"source_types")},Transformation.prototype.sourceTransformation=function(value){return this.param(value,"source_transformation")},Transformation.prototype.startOffset=function(value){return this.rangeParam(value,"start_offset","so")},Transformation.prototype.streamingProfile=function(value){return this.param(value,"streaming_profile","sp")},Transformation.prototype.transformation=function(value){return this.transformationParam(value,"transformation","t")},Transformation.prototype.underlay=function(value){return this.layerParam(value,"underlay","u")},Transformation.prototype.variable=function(name,value){return this.param(value,name,name)},Transformation.prototype.variables=function(values){return this.arrayParam(values,"variables")},Transformation.prototype.videoCodec=function(value){return this.param(value,"video_codec","vc",Param.process_video_params)},Transformation.prototype.videoSampling=function(value){return this.param(value,"video_sampling","vs")},Transformation.prototype.width=function(value){return this.param(value,"width","w",function(_this){return function(){return _this.getValue("crop")||_this.getValue("overlay")||_this.getValue("underlay")?Expression.normalize(value):null}}(this))},Transformation.prototype.x=function(value){return this.param(value,"x","x",Expression.normalize)},Transformation.prototype.y=function(value){return this.param(value,"y","y",Expression.normalize)},Transformation.prototype.zoom=function(value){return this.param(value,"zoom","z",Expression.normalize)},Transformation}(TransformationBase),Transformation.methods||(Transformation.methods=Util.difference(Util.functions(Transformation.prototype),Util.functions(TransformationBase.prototype))),Transformation.PARAM_NAMES||(Transformation.PARAM_NAMES=function(){var j,len,ref,results;for(ref=Transformation.methods,results=[],j=0,len=ref.length;j<len;j++)m=ref[j],results.push(Util.snakeCase(m));return results}().concat(Configuration.CONFIG_PARAMS)),HtmlTag=function(){function HtmlTag(name,publicId,options){var transformation;this.name=name,this.publicId=publicId,null==options&&(Util.isPlainObject(publicId)?(options=publicId,this.publicId=void 0):options={}),transformation=new Transformation(options),transformation.setParent(this),this.transformation=function(){return transformation}}var toAttribute;return HtmlTag.new=function(name,publicId,options){return new this(name,publicId,options)},toAttribute=function(key,value){return value?!0===value?key:key+'="'+value+'"':void 0},HtmlTag.prototype.htmlAttrs=function(attrs){var key,value;return function(){var results;results=[];for(key in attrs)(value=attrs[key])&&results.push(toAttribute(key,value));return results}().sort().join(" ")},HtmlTag.prototype.getOptions=function(){return this.transformation().toOptions()},HtmlTag.prototype.getOption=function(name){return this.transformation().getValue(name)},HtmlTag.prototype.attributes=function(){return this.transformation().toHtmlAttributes()},HtmlTag.prototype.setAttr=function(name,value){return this.transformation().set("html_"+name,value),this},HtmlTag.prototype.getAttr=function(name){return this.attributes()["html_"+name]||this.attributes()[name]},HtmlTag.prototype.removeAttr=function(name){var ref;return null!=(ref=this.transformation().remove("html_"+name))?ref:this.transformation().remove(name)},HtmlTag.prototype.content=function(){return""},HtmlTag.prototype.openTag=function(){return"<"+this.name+" "+this.htmlAttrs(this.attributes())+">"},HtmlTag.prototype.closeTag=function(){return"</"+this.name+">"},HtmlTag.prototype.toHtml=function(){return this.openTag()+this.content()+this.closeTag()},HtmlTag.prototype.toDOM=function(){var element,name,ref,value;if(!Util.isFunction("undefined"!=typeof document&&null!==document?document.createElement:void 0))throw"Can't create DOM if document is not present!";element=document.createElement(this.name),ref=this.attributes();for(name in ref)value=ref[name],element[name]=value;return element},HtmlTag.isResponsive=function(tag,responsiveClass){var dataSrc;return dataSrc=Util.getData(tag,"src-cache")||Util.getData(tag,"src"),Util.hasClass(tag,responsiveClass)&&/\bw_auto\b/.exec(dataSrc)},HtmlTag}(),ImageTag=function(superClass){function ImageTag(publicId,options){null==options&&(options={}),ImageTag.__super__.constructor.call(this,"img",publicId,options)}return extend(ImageTag,superClass),ImageTag.prototype.closeTag=function(){return""},ImageTag.prototype.attributes=function(){var attr,options,srcAttribute;return attr=ImageTag.__super__.attributes.call(this)||[],options=this.getOptions(),srcAttribute=options.responsive&&!options.client_hints?"data-src":"src",null==attr[srcAttribute]&&(attr[srcAttribute]=new Cloudinary(this.getOptions()).url(this.publicId)),attr},ImageTag}(HtmlTag),VideoTag=function(superClass){function VideoTag(publicId,options){null==options&&(options={}),options=Util.defaults({},options,Cloudinary.DEFAULT_VIDEO_PARAMS),VideoTag.__super__.constructor.call(this,"video",publicId.replace(/\.(mp4|ogv|webm)$/,""),options)}var DEFAULT_POSTER_OPTIONS,VIDEO_TAG_PARAMS;return extend(VideoTag,superClass),VIDEO_TAG_PARAMS=["source_types","source_transformation","fallback_content","poster"],["webm","mp4","ogv"],DEFAULT_POSTER_OPTIONS={format:"jpg",resource_type:"video"},VideoTag.prototype.setSourceTransformation=function(value){return this.transformation().sourceTransformation(value),this},VideoTag.prototype.setSourceTypes=function(value){return this.transformation().sourceTypes(value),this},VideoTag.prototype.setPoster=function(value){return this.transformation().poster(value),this},VideoTag.prototype.setFallbackContent=function(value){return this.transformation().fallbackContent(value),this},VideoTag.prototype.content=function(){var cld,fallback,innerTags,mimeType,sourceTransformation,sourceTypes,src,srcType,transformation,videoType;return sourceTypes=this.transformation().getValue("source_types"),sourceTransformation=this.transformation().getValue("source_transformation"),fallback=this.transformation().getValue("fallback_content"),Util.isArray(sourceTypes)?(cld=new Cloudinary(this.getOptions()),innerTags=function(){var j,len,results;for(results=[],j=0,len=sourceTypes.length;j<len;j++)srcType=sourceTypes[j],transformation=sourceTransformation[srcType]||{},src=cld.url(""+this.publicId,Util.defaults({},transformation,{resource_type:"video",format:srcType})),videoType="ogv"===srcType?"ogg":srcType,mimeType="video/"+videoType,results.push("<source "+this.htmlAttrs({src:src,type:mimeType})+">");return results}.call(this)):innerTags=[],innerTags.join("")+fallback},VideoTag.prototype.attributes=function(){var a,attr,j,len,poster,ref,ref1,sourceTypes;for(sourceTypes=this.getOption("source_types"),poster=null!=(ref=this.getOption("poster"))?ref:{},Util.isPlainObject(poster)&&(defaults=null!=poster.public_id?Cloudinary.DEFAULT_IMAGE_PARAMS:DEFAULT_POSTER_OPTIONS,poster=new Cloudinary(this.getOptions()).url(null!=(ref1=poster.public_id)?ref1:this.publicId,Util.defaults({},poster,defaults))),attr=VideoTag.__super__.attributes.call(this)||[],j=0,len=attr.length;j<len;j++)a=attr[j],Util.contains(VIDEO_TAG_PARAMS)||(attr=a);return Util.isArray(sourceTypes)||(attr.src=new Cloudinary(this.getOptions()).url(this.publicId,{resource_type:"video",format:sourceTypes})),null!=poster&&(attr.poster=poster),attr},VideoTag}(HtmlTag),ClientHintsMetaTag=function(superClass){function ClientHintsMetaTag(options){ClientHintsMetaTag.__super__.constructor.call(this,"meta",void 0,Util.assign({"http-equiv":"Accept-CH",content:"DPR, Viewport-Width, Width"},options))}return extend(ClientHintsMetaTag,superClass),ClientHintsMetaTag.prototype.closeTag=function(){return""},ClientHintsMetaTag}(HtmlTag),Cloudinary=function(){function Cloudinary(options){var configuration;this.devicePixelRatioCache={},this.responsiveConfig={},this.responsiveResizeInitialized=!1,configuration=new Configuration(options),this.config=function(newConfig,newValue){return configuration.config(newConfig,newValue)},this.fromDocument=function(){return configuration.fromDocument(),this},this.fromEnvironment=function(){return configuration.fromEnvironment(),this},this.init=function(){return configuration.init(),this}}var AKAMAI_SHARED_CDN,DEFAULT_POSTER_OPTIONS,DEFAULT_VIDEO_SOURCE_TYPES,OLD_AKAMAI_SHARED_CDN,SEO_TYPES,SHARED_CDN,absolutize,applyBreakpoints,cdnSubdomainNumber,closestAbove,cloudinaryUrlPrefix,defaultBreakpoints,finalizeResourceType,findContainerWidth,maxWidth,updateDpr;return"2.5.0","d3jpl91pxevbkh.cloudfront.net",OLD_AKAMAI_SHARED_CDN="cloudinary-a.akamaihd.net",AKAMAI_SHARED_CDN="res.cloudinary.com",SHARED_CDN=AKAMAI_SHARED_CDN,DEFAULT_POSTER_OPTIONS={format:"jpg",resource_type:"video"},DEFAULT_VIDEO_SOURCE_TYPES=["webm","mp4","ogv"],SEO_TYPES={"image/upload":"images","image/private":"private_images","image/authenticated":"authenticated_images","raw/upload":"files","video/upload":"videos"},Cloudinary.DEFAULT_IMAGE_PARAMS={resource_type:"image",transformation:[],type:"upload"},Cloudinary.DEFAULT_VIDEO_PARAMS={fallback_content:"",resource_type:"video",source_transformation:{},source_types:DEFAULT_VIDEO_SOURCE_TYPES,transformation:[],type:"upload"},Cloudinary.new=function(options){return new this(options)},finalizeResourceType=function(resourceType,type,urlSuffix,useRootPath,shorten){var key,options;if(null==resourceType&&(resourceType="image"),null==type&&(type="upload"),Util.isPlainObject(resourceType)&&(options=resourceType,resourceType=options.resource_type,type=options.type,urlSuffix=options.url_suffix,useRootPath=options.use_root_path,shorten=options.shorten),null==type&&(type="upload"),null!=urlSuffix&&(resourceType=SEO_TYPES[resourceType+"/"+type],type=null,null==resourceType))throw new Error("URL Suffix only supported for "+function(){var results;results=[];for(key in SEO_TYPES)results.push(key);return results}().join(", "));if(useRootPath){if(("image"!==resourceType||"upload"!==type)&&"images"!==resourceType)throw new Error("Root path only supported for image/upload");resourceType=null,type=null}return shorten&&"image"===resourceType&&"upload"===type&&(resourceType="iu",type=null),[resourceType,type].join("/")},absolutize=function(url){var prefix;return url.match(/^https?:\//)||(prefix=document.location.protocol+"//"+document.location.host,"?"===url[0]?prefix+=document.location.pathname:"/"!==url[0]&&(prefix+=document.location.pathname.replace(/\/[^\/]*$/,"/")),url=prefix+url),url},Cloudinary.prototype.url=function(publicId,options){var prefix,ref,resourceTypeAndType,transformation,transformationString,url,version;if(null==options&&(options={}),!publicId)return publicId;if(options instanceof Transformation&&(options=options.toOptions()),options=Util.defaults({},options,this.config(),Cloudinary.DEFAULT_IMAGE_PARAMS),"fetch"===options.type&&(options.fetch_format=options.fetch_format||options.format,publicId=absolutize(publicId)),transformation=new Transformation(options),transformationString=transformation.serialize(),!options.cloud_name)throw"Unknown cloud_name";if(publicId.search("/")>=0&&!publicId.match(/^v[0-9]+/)&&!publicId.match(/^https?:\//)&&!(null!=(ref=options.version)?ref.toString():void 0)&&(options.version=1),publicId.match(/^https?:/))"upload"===options.type||"asset"===options.type?url=publicId:publicId=encodeURIComponent(publicId).replace(/%3A/g,":").replace(/%2F/g,"/");else{try{publicId=decodeURIComponent(publicId)}catch(error1){error1}if(publicId=encodeURIComponent(publicId).replace(/%3A/g,":").replace(/%2F/g,"/"),options.url_suffix){if(options.url_suffix.match(/[\.\/]/))throw"url_suffix should not include . or /";publicId=publicId+"/"+options.url_suffix}options.format&&(options.trust_public_id||(publicId=publicId.replace(/\.(jpg|png|gif|webp)$/,"")),publicId=publicId+"."+options.format)}return prefix=cloudinaryUrlPrefix(publicId,options),resourceTypeAndType=finalizeResourceType(options.resource_type,options.type,options.url_suffix,options.use_root_path,options.shorten),version=options.version?"v"+options.version:"",url||Util.compact([prefix,resourceTypeAndType,transformationString,version,publicId]).join("/").replace(/([^:])\/+/g,"$1/")},Cloudinary.prototype.video_url=function(publicId,options){return options=Util.assign({resource_type:"video"},options),this.url(publicId,options)},Cloudinary.prototype.video_thumbnail_url=function(publicId,options){return options=Util.assign({},DEFAULT_POSTER_OPTIONS,options),this.url(publicId,options)},Cloudinary.prototype.transformation_string=function(options){return new Transformation(options).serialize()},Cloudinary.prototype.image=function(publicId,options){var client_hints,img,ref,ref1;return null==options&&(options={}),img=this.imageTag(publicId,options),client_hints=null!=(ref=null!=(ref1=options.client_hints)?ref1:this.config("client_hints"))&&ref,null!=options.src||client_hints||img.setAttr("src",""),img=img.toDOM(),client_hints||(Util.setData(img,"src-cache",this.url(publicId,options)),this.cloudinary_update(img,options)),img},Cloudinary.prototype.imageTag=function(publicId,options){var tag;return tag=new ImageTag(publicId,this.config()),tag.transformation().fromOptions(options),tag},Cloudinary.prototype.video_thumbnail=function(publicId,options){return this.image(publicId,Util.merge({},DEFAULT_POSTER_OPTIONS,options))},Cloudinary.prototype.facebook_profile_image=function(publicId,options){return this.image(publicId,Util.assign({type:"facebook"},options))},Cloudinary.prototype.twitter_profile_image=function(publicId,options){return this.image(publicId,Util.assign({type:"twitter"},options))},Cloudinary.prototype.twitter_name_profile_image=function(publicId,options){return this.image(publicId,Util.assign({type:"twitter_name"},options))},Cloudinary.prototype.gravatar_image=function(publicId,options){return this.image(publicId,Util.assign({type:"gravatar"},options))},Cloudinary.prototype.fetch_image=function(publicId,options){return this.image(publicId,Util.assign({type:"fetch"},options))},Cloudinary.prototype.video=function(publicId,options){return null==options&&(options={}),this.videoTag(publicId,options).toHtml()},Cloudinary.prototype.videoTag=function(publicId,options){return options=Util.defaults({},options,this.config()),new VideoTag(publicId,options)},Cloudinary.prototype.sprite_css=function(publicId,options){return options=Util.assign({type:"sprite"},options),publicId.match(/.css$/)||(options.format="css"),this.url(publicId,options)},Cloudinary.prototype.responsive=function(options,bootstrap){var ref,ref1,ref2,responsiveClass,timeout;if(null==bootstrap&&(bootstrap=!0),this.responsiveConfig=Util.merge(this.responsiveConfig||{},options),responsiveClass=null!=(ref=this.responsiveConfig.responsive_class)?ref:this.config("responsive_class"),bootstrap&&this.cloudinary_update("img."+responsiveClass+", img.cld-hidpi",this.responsiveConfig),(null==(ref1=null!=(ref2=this.responsiveConfig.responsive_resize)?ref2:this.config("responsive_resize"))||ref1)&&!this.responsiveResizeInitialized)return this.responsiveConfig.resizing=this.responsiveResizeInitialized=!0,timeout=null,window.addEventListener("resize",function(_this){return function(){var debounce,ref3,ref4,reset,run,wait,waitFunc;return debounce=null!=(ref3=null!=(ref4=_this.responsiveConfig.responsive_debounce)?ref4:_this.config("responsive_debounce"))?ref3:100,reset=function(){if(timeout)return clearTimeout(timeout),timeout=null},run=function(){return _this.cloudinary_update("img."+responsiveClass,_this.responsiveConfig)},waitFunc=function(){return reset(),run()},wait=function(){return reset(),timeout=setTimeout(waitFunc,debounce)},debounce?wait():run()}}(this))},Cloudinary.prototype.calc_breakpoint=function(element,width,steps){var breakpoints,point;return breakpoints=Util.getData(element,"breakpoints")||Util.getData(element,"stoppoints")||this.config("breakpoints")||this.config("stoppoints")||defaultBreakpoints,Util.isFunction(breakpoints)?breakpoints(width,steps):(Util.isString(breakpoints)&&(breakpoints=function(){var j,len,ref,results;for(ref=breakpoints.split(","),results=[],j=0,len=ref.length;j<len;j++)point=ref[j],results.push(parseInt(point));return results}().sort(function(a,b){return a-b})),closestAbove(breakpoints,width))},Cloudinary.prototype.calc_stoppoint=Cloudinary.prototype.calc_breakpoint,Cloudinary.prototype.device_pixel_ratio=function(roundDpr){var dpr,dprString;return null==roundDpr&&(roundDpr=!0),dpr=("undefined"!=typeof window&&null!==window?window.devicePixelRatio:void 0)||1,roundDpr&&(dpr=Math.ceil(dpr)),(dpr<=0||NaN===dpr)&&(dpr=1),dprString=dpr.toString(),dprString.match(/^\d+$/)&&(dprString+=".0"),dprString},defaultBreakpoints=function(width,steps){return null==steps&&(steps=100),steps*Math.ceil(width/steps)},closestAbove=function(list,value){var i;for(i=list.length-2;i>=0&&list[i]>=value;)i--;return list[i+1]},cdnSubdomainNumber=function(publicId){return crc32(publicId)%5+1},cloudinaryUrlPrefix=function(publicId,options){var cdnPart,host,path,protocol,ref,subdomain;return 0===(null!=(ref=options.cloud_name)?ref.indexOf("/"):void 0)?"/res"+options.cloud_name:(protocol="http://",cdnPart="",subdomain="res",host=".cloudinary.com",path="/"+options.cloud_name,options.protocol&&(protocol=options.protocol+"//"),options.private_cdn&&(cdnPart=options.cloud_name+"-",path=""),options.cdn_subdomain&&(subdomain="res-"+cdnSubdomainNumber(publicId)),options.secure?(protocol="https://",!1===options.secure_cdn_subdomain&&(subdomain="res"),null!=options.secure_distribution&&options.secure_distribution!==OLD_AKAMAI_SHARED_CDN&&options.secure_distribution!==SHARED_CDN&&(cdnPart="",subdomain="",host=options.secure_distribution)):options.cname&&(protocol="http://",cdnPart="",subdomain=options.cdn_subdomain?"a"+(crc32(publicId)%5+1)+".":"",host=options.cname),[protocol,cdnPart,subdomain,host,path].join(""))},Cloudinary.prototype.processImageTags=function(nodes,options){var images,imgOptions,node,publicId,url;return null==options&&(options={}),Util.isEmpty(nodes)?this:(options=Util.defaults({},options,this.config()),images=function(){var j,len,ref,results;for(results=[],j=0,len=nodes.length;j<len;j++)node=nodes[j],"IMG"===(null!=(ref=node.tagName)?ref.toUpperCase():void 0)&&(imgOptions=Util.assign({width:node.getAttribute("width"),height:node.getAttribute("height"),src:node.getAttribute("src")},options),publicId=imgOptions.source||imgOptions.src,delete imgOptions.source,delete imgOptions.src,url=this.url(publicId,imgOptions),imgOptions=new Transformation(imgOptions).toHtmlAttributes(),Util.setData(node,"src-cache",url),node.setAttribute("width",imgOptions.width),node.setAttribute("height",imgOptions.height),results.push(node));return results}.call(this),this.cloudinary_update(images,options),this)},applyBreakpoints=function(tag,width,steps,options){var ref,ref1,ref2,responsive_use_breakpoints;return responsive_use_breakpoints=null!=(ref=null!=(ref1=null!=(ref2=options.responsive_use_breakpoints)?ref2:options.responsive_use_stoppoints)?ref1:this.config("responsive_use_breakpoints"))?ref:this.config("responsive_use_stoppoints"),!responsive_use_breakpoints||"resize"===responsive_use_breakpoints&&!options.resizing?width:this.calc_breakpoint(tag,width,steps)},findContainerWidth=function(element){var containerWidth,style;for(containerWidth=0;(element=null!=element?element.parentNode:void 0)instanceof Element&&!containerWidth;)style=window.getComputedStyle(element),/^inline/.test(style.display)||(containerWidth=Util.width(element));return containerWidth},updateDpr=function(dataSrc,roundDpr){return dataSrc.replace(/\bdpr_(1\.0|auto)\b/g,"dpr_"+this.device_pixel_ratio(roundDpr))},maxWidth=function(requiredWidth,tag){var imageWidth;return imageWidth=Util.getData(tag,"width")||0,requiredWidth>imageWidth&&(imageWidth=requiredWidth,Util.setData(tag,"width",requiredWidth)),imageWidth},Cloudinary.prototype.cloudinary_update=function(elements,options){var containerWidth,dataSrc,j,len,match,ref,ref1,ref2,ref3,ref4,ref5,requiredWidth,responsive,responsiveClass,roundDpr,setUrl,tag;if(null==options&&(options={}),null===elements)return this;for(responsive=null!=(ref=null!=(ref1=options.responsive)?ref1:this.config("responsive"))&&ref,elements=function(){switch(!1){case!Util.isArray(elements):case"NodeList"!==elements.constructor.name:return elements;case!Util.isString(elements):return document.querySelectorAll(elements);default:return[elements]}}(),responsiveClass=null!=(ref2=null!=(ref3=this.responsiveConfig.responsive_class)?ref3:options.responsive_class)?ref2:this.config("responsive_class"),roundDpr=null!=(ref4=options.round_dpr)?ref4:this.config("round_dpr"),j=0,len=elements.length;j<len;j++)if(tag=elements[j],(null!=(ref5=tag.tagName)?ref5.match(/img/i):void 0)&&(setUrl=!0,responsive&&Util.addClass(tag,responsiveClass),dataSrc=Util.getData(tag,"src-cache")||Util.getData(tag,"src"),!Util.isEmpty(dataSrc))){if(dataSrc=updateDpr.call(this,dataSrc,roundDpr),HtmlTag.isResponsive(tag,responsiveClass))if(0!==(containerWidth=findContainerWidth(tag))){switch(!1){case!/w_auto:breakpoints/.test(dataSrc):requiredWidth=maxWidth(containerWidth,tag),dataSrc=dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/,"w_auto:breakpoints$1:"+requiredWidth);break;case!(match=/w_auto(:(\d+))?/.exec(dataSrc)):requiredWidth=applyBreakpoints.call(this,tag,containerWidth,match[2],options),requiredWidth=maxWidth(requiredWidth,tag),dataSrc=requiredWidth?dataSrc=dataSrc.replace(/w_auto[^,\/]*/g,"w_"+requiredWidth):setUrl=false;}Util.removeAttribute(tag,"width"),options.responsive_preserve_height||Util.removeAttribute(tag,"height")}else setUrl=!1;setUrl&&Util.setAttribute(tag,"src",dataSrc)}return this},Cloudinary.prototype.transformation=function(options){return Transformation.new(this.config()).fromOptions(options).setParent(this)},Cloudinary}(),cloudinary={utf8_encode:utf8_encode,crc32:crc32,Util:Util,Condition:Condition,Transformation:Transformation,Configuration:Configuration,HtmlTag:HtmlTag,ImageTag:ImageTag,VideoTag:VideoTag,ClientHintsMetaTag:ClientHintsMetaTag,Layer:Layer,FetchLayer:FetchLayer,TextLayer:TextLayer,SubtitlesLayer:SubtitlesLayer,Cloudinary:Cloudinary,VERSION:"2.5.0"}});

Purity={};Purity.eventPathHasClass=(eventPath,className)=>{return eventPath.find(function(element){if(element.classList){if(element.classList.contains(className)){return element.classList.contains(className)}}})};Purity.popwindow={ppContainer:document.createElement('div'),ppContent:document.createElement('div'),YTplayer:undefined,closeCallback:()=>{},init:function(){let ppContainer=this.ppContainer;ppContainer.id="purity-pop-window-container";ppContainer.className="w-full h-full top-0 flex j-c-center a-i-center o-f-scl hide";document.body.appendChild(ppContainer);let ppContent=this.ppContent;ppContent.id="purity-pop-window-content";ppContent.className="margin-auto w-full pos-rlt o-f-hid";ppContainer.appendChild(ppContent);document.addEventListener("click",function(e){let eventPath=e.path||(e.composedPath&&e.composedPath());if(Purity.eventPathHasClass(eventPath,'purity-pop')){e.preventDefault();let element=Purity.eventPathHasClass(eventPath,'purity-pop');let setting={};for(let item of element.attributes){if(item.localName.indexOf('pop-')==0){setting[item.localName.replace('pop-','')]=item.value}};Purity.popwindow.open(element.href,element.getAttribute('pop-type')?element.getAttribute('pop-type'):'content',setting)};if(e.target.id==='purity-pop-window-container'||Purity.eventPathHasClass(eventPath,'purity-pop-window-close')){Purity.popwindow.close()}})},open:function(href,type='content',setting={}){var ppClose='<svg height="40" width="40" class="pos-abt pointer purity-pop-window-close"><line x1="10" y1="10" x2="30" y2="30" stroke="#333"></line><line x1="10" y1="30" x2="30" y2="10" stroke="#333"></line></svg>';let ppContainer=this.ppContainer;let ppContent=this.ppContent;if(setting.width){ppContent.style.maxWidth=setting.width}else{ppContent.style.removeProperty('max-width')};if(setting.ratio){ppContent.style.paddingTop=`${setting.ratio*100}%`}else{ppContent.style.removeProperty('padding-top')};if(type=='img'){ppContent.innerHTML=`<img src="${href}">`}else if(type=='img-cld'){ppContent.innerHTML=`<img data-src="${href}" class="cld-prepare" alt="${setting.alt}" src="${setting.placeholder}">`}else if(type=='youtube'){ppContent.innerHTML=`<div id="pop-window-video"></div>`;let videoSetting={};if(setting.autoplay){videoSetting.autoplay=setting.autoplay};if(setting.rel){videoSetting.rel=setting.rel};if(!window.YT){let tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";let firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);window.onYouTubePlayerAPIReady=()=>{Purity.popwindow.YTplayer=new YT.Player('pop-window-video',{videoId:setting.ytid,playerVars:videoSetting})}}else{Purity.popwindow.YTplayer=new YT.Player('pop-window-video',{videoId:setting.ytid,playerVars:videoSetting})}}else{ppContent.innerHTML=document.getElementById(href.split('#')[1]).innerHTML};ppContent.innerHTML+=ppClose;ppContainer.classList.remove('hide');ppContainer.classList.add('animated-show');document.body.classList.add('o-f-hid');document.getElementsByTagName('html')[0].classList.add('o-f-hid');cloudinaryimg.responsive();setting.openCallBack?setting.openCallBack():null;setting.closeCallBack?Purity.popwindow.closeCallBack=setting.closeCallBack:Purity.popwindow.closeCallBack=()=>{}},close:function(){let ppContainer=this.ppContainer;let ppContent=this.ppContent;ppContainer.classList.remove('animated-show');ppContainer.classList.add('animated-hide');setTimeout(function(){ppContainer.classList.remove('animated-hide');ppContainer.classList.add('hide');ppContent.innerHTML='';document.body.classList.remove('o-f-hid');document.getElementsByTagName('html')[0].classList.remove('o-f-hid');Purity.popwindow.closeCallBack()},400)}};Purity.popwindow.init();Purity.sameHeight={init:()=>{Purity.sameHeight.set();document.body.onresize=()=>{Purity.sameHeight.cancle();Purity.sameHeight.set()}},set:()=>{let attList={};Array.prototype.forEach.call(document.getElementsByClassName('same-height'),(element)=>{attList[element.getAttribute('same-height-id')]>0?attList[element.getAttribute('same-height-id')]=Math.max(element.offsetHeight,attList[element.getAttribute('same-height-id')]):attList[element.getAttribute('same-height-id')]=element.offsetHeight});Array.prototype.forEach.call(document.getElementsByClassName('same-height'),(element)=>{element.style.height=`${attList[element.getAttribute('same-height-id')]}px`})},cancle:()=>{Array.prototype.forEach.call(document.getElementsByClassName('same-height'),(element)=>{element.style.removeProperty('height')})}};Purity.sameHeight.init();Purity.swipe=(swipeData)=>{let startPoint=[0,0];let endPoint=[0,0];Array.prototype.forEach.call(document.querySelectorAll(swipeData.element),(element)=>{element.addEventListener('touchstart',(event)=>{startPoint=endPoint=[event.touches[0].pageX,event.touches[0].pageY]});element.addEventListener('touchmove',(event)=>{endPoint=[event.touches[0].pageX,event.touches[0].pageY]});element.addEventListener('touchend',()=>{swipeData.method.forEach((element)=>{let distance=element.distance?element.distance:50;switch(element.direction){case 'left':if(endPoint[0]-startPoint[0]>distance){element.success()};break;case 'right':if(startPoint[0]-endPoint[0]>distance){element.success()};break;case 'top':if(endPoint[1]-startPoint[1]>distance){element.success()};break;case 'bottom':if(startPoint[1]-endPoint[1]>distance){element.success()};break;default:console.log('unknown method')}})})})}


/*================ Main ================*/
'use strict';
var Holly = Holly || {};
// Global array to push product ids
var currentProduct = currentProduct || {}
Holly = {
  /*
  **------------------------------------------------------------------------**
  * REGISTER YOUR FUNCTION HERE **
  * TO init functions on load
  * 1. Do not use liquid scripts
  **------------------------------------------------------------------------**
  */
  init: function() {
    // this.checkIfSubscription(),
    this.initReadReferringUrl(), this.initCollectionDescription(),
    this.initAccordion(), this.initOpenSearch(),
    this.initMobileMenu(),
    this.initImgLazyLoad(),
    this.initUpgradeBrowser(), this.initScrollTop(),
    this.initScrollToDiv();
    this.topBannerMessage();
    this.initcheckCurrency();
    this.addAllItems();
    this.initTabsi9();
    this.initNavAnimation();
    this.initWishList();
    this.syncQtyInputs();
    // fix home page slideshow bug on mobile => use mobile image radios
    $(window).on('lazybeforeunveil', function(e){
      const AFTER = window.Promise && Promise.resolve ? Promise.resolve() : {then: function(fn){setTimeout(fn);}};
      AFTER.then(function(){
        window.dispatchEvent(new Event('resize'));
      });
    });
    /*
    * Methods NOT in use
    * this.initDelayImgLazyLoad()
    * this.initImgOnLoadBlur()
    */
  },
  syncQtyInputs: function() {
      // when desktop/mobile qty changes, sync across all viewports
    $('[data-quantity-desktop], [data-quantity-mobile]').on('change', function(event) {
      // sync
      var quantity = event.currentTarget.value;
      $('[data-quantity-desktop], [data-quantity-mobile]').val(quantity);
    })
  },
  initTabsi9: function() {
    // in HTML <head>:
    // <!--[if lt IE 9]><script>window.ltIE9=true</script><![endif]-->
    if(window.ltIE9) {
      (function($) {
        $('.tabs input[type="radio"]:checked')
        .closest('.tab')
        .addClass('checked');
        $('html').on('click', '.tabs input', function() {
          $('input[name="' + this.name + '"]')
          .closest('.tab')
          .removeClass('checked');
          $(this)
          .closest('.tab')
          .addClass('checked');
        });
      })(window.jQuery);
    }
  },
  addAllItems: function() {
    var $currentProductVariantSku = $('.multiple-add-to-cart').attr('data-variant-sku')
    var $currentProductTitle = $('.multiple-add-to-cart').attr('data-variant-title')
    currentProduct = {
      'variant_sku': $currentProductVariantSku,
      'title': $currentProductTitle
    }
    var message
    // var countryCode = "CA"
    //
    // gip.overrideCountry(countryCode)

    $addToCart = $('.multiple-add-to-cart')

    $addToCart.click(function(e) {
      e.preventDefault();

      var $this = $(this)
      var array = []
      array.push($this.attr('data-variant-id'))
      window.currentAddButton = $this;
      Shopify.queue = [];

      var quantity = $("[data-quantity-desktop]").val();
      // check if current product in array
      // var $currentProductId = $('.multiple-add-to-cart').attr('data-variant-id')
      if (array.indexOf(currentProduct.variant_id) > -1) {
        // console.log('current product in array')
      } else {
        // console.log('adding current product..')
        array.push(currentProduct.variant_id)
      }

      // Check if liquid array or standard array
      if (array.indexOf(',') > -1) {
        var newArray = array.split(',')
      } else {
        var newArray = array
      }

      // remove all undefined in array
      newArray = newArray.filter(function(n) { return n != undefined })
      // console.log('filtered out undefined in array =>', newArray)

      Holly.checkboxConfirmation(newArray);
      Holly.AddProductsToCard(newArray, quantity);
    })
  },
  AddProductsToCard: function(variantIdList, quantity) {

    // If we still have requests in the queue, let's process the next one.
    if (variantIdList.length) {
      var request = variantIdList.shift()
      // if subscriptions change
      var $productId = $('.multiple-add-to-cart').attr('data-product-id')
      var $originalVariantId = $('.multiple-add-to-cart').attr('data-variant-id')
      var $compare_at_price = $('.multiple-add-to-cart').attr('data-variant-compare-price')
      var $price = $('.multiple-add-to-cart').attr('data-variant-price')
      // if user click on subscriptions option
      // if orginal product.variant.id == to request
      if ($subscriptionEl.hasClass('active') == true && request == $originalVariantId) {        
        var shipping_interval_unit_type = document.getElementById('shipping_interval_unit_type_' + $productId).value;
        var shipping_interval_frequency = document.getElementById('shipping_interval_frequency_' + $productId).value;
        var subscription_id = document.getElementById('subscription_id_' + $productId).value;
        var discount_variant_id =  document.getElementById('discount-select-' + $productId).value;
        

        var productInfo = {
          "quantity": quantity,
          "id": discount_variant_id,
          "properties[shipping_interval_frequency]": shipping_interval_frequency,
          "properties[shipping_interval_unit_type]": shipping_interval_unit_type,
          "properties[subscription_id]": subscription_id
        }
      } else {
        if($compare_at_price < $price) {
          var productInfo = {
            "quantity": quantity,
            "id": request,
            "selling_plan": $("#selling_plan").val()
          }
        } else {
          var productInfo = {
            "quantity": quantity,
            "id": request,
          }
        }        
      }
      Holly.addItemById(
        productInfo,
        (data)=>{
          Holly.AddProductsToCard(variantIdList, quantity);
        },
        (data)=>{
          if (variantIdList.length) {
            Holly.AddProductsToCard(variantIdList, quantity);
          }
        }
      );
    }
  },
  addItemById: (itemInfo, successFunction = (data)=>{}, errorFunction = (data)=>{})=>{
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data: itemInfo,
      success: function(data) {
        successFunction(data);
      },
      error: function() {
        errorFunction(data);
      }
    })
  },
  checkboxConfirmation(bundleIds) {
    var $el = window.currentAddButton;
    var $cartCount = $('span#CartCount')
    var black = '#333333'
    var white = '#ffffff'
    var green = '#5cb85c'
    var brandColor = '#ed3376'
    var idCount = bundleIds.length

    // Set delay timer depending on how many products need to be added to cart
    var firstTimeout = 550
    var secondTimeout = 750
    // console.log('1st timeout message: ', firstTimeout * bundleIds.length)
    // console.log('2nd timeout message: ', secondTimeout * bundleIds.length)

    // Disable CTA while products are being added through the queue
    $el
      .attr('disabled', 'disabled')
      .addClass('disabled')
      .text('Adding Selected Items..')
      .css({
        'cursor': 'wait'
      })
    // Remove disable CTA and display confirmation of success
    setTimeout(function() {
      $el
        .removeAttr('disabled')
        .removeClass('disabled')
        .text('Selected Items In Tote ✓')
        .css({
          'cursor': 'pointer',
          'background-color': green
        })
      if (!$el.hasClass('btn-quaternary')) {
        $el.css({
          'color': white,
          'border': white
        })
      }
      // Clear all checkbox
      $('input[type=checkbox]').attr('checked', false)
      // Clear all .unmuted from product image
      $('.checkbox-grid img').removeClass('unmuted')
      // Simulate click event to toggle slide out cart
      $('.site-header__cart-toggle').click()

      // Set CTA back to normal styling after confirmation timeout
      setTimeout(function() {
        if ($el.hasClass('btn-quaternary')) {
          $el
            .text('Add Selected Items')
            .css({
              'background-color': brandColor
            })
        } else {
          $el
            .text('Add To Tote')
            .css({
              'background-color': brandColor,
              'color': white,
              'border': '1px solid ' + brandColor
            })
        }
      }, secondTimeout * idCount)
    }, firstTimeout * idCount)
  },
  initNavAnimation:()=>{
    $('.desk-top-nav, .desk-top-fix-nav').mousemove(function(){
      $(this).find('li:hover .dropdown_fullwidth').css('z-index','9999').parent().siblings().each(function(){
        $(this).find('.dropdown_fullwidth').css('z-index')==9999 ? $(this).find('.dropdown_fullwidth').css('z-index','9998') : '' ;
      });
      $(this).find('.nav-bk, li .dropdown_fullwidth').css('height',`${$(this).find('li:hover .dropdown_fullwidth .wrapper').outerHeight()?$(this).find('li:hover .dropdown_fullwidth .wrapper').outerHeight():0}px`);
    });
    $('.desk-top-nav, .desk-top-fix-nav').mouseleave(function(){
      $(this).find('.nav-bk, li .dropdown_fullwidth').css('height',0);
    });
    $('.desk-top-nav li .dropdown_fullwidth, .desk-top-fix-nav li .dropdown_fullwidt').on('transitionend webkitTransitionEnd oTransitionEnd',function(){
      $(this).css('opacity')==0 ? $(this).css('z-index','-1') : '';
    });
    $(document).on('click','.dorp-trigger-l2, .dorp-trigger-l1',function(){
      $(this).parent('li').toggleClass('open-drawer');
    });
    $('.desk-top-nav li .dropdown_fullwidth, .desk-top-fix-nav li .dropdown_fullwidt').css('z-index','-1');
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {
        $('.desk-top-fix-nav').css('top',`${$('#PromotionBannerMessage').length>0 ? 68 : 26}px`);
      } else {
        $('.desk-top-fix-nav').css('top','-100px');
      }
    });
  },
  customSlider: (slideDataObject)=>{
    // slideDataObject template
    // {
    //   target: $('someting'),                                 * required, length must be 1
    //   circle: trur | false,                                  * if loop slide
    // }
    const $target = slideDataObject.target;
    if($target.length!=1){
      console.log(`the target is not unique, the length is ${$target.length}`);
      return;
    }
    // prepare function, elements & classes
    const PREV = `<div class="pos-abt prev pointer slideshow-button h-full flex j-c-center top-0 left-0"><svg viewBox="0 0 50 100" class="w-full"><path d="M 0,50 L 50,100 L 50,90 L 10,50  L 50,10 L 50,0 Z"></path></svg><div>`;
    const NEXT = `<div class="pos-abt next pointer slideshow-button h-full flex j-c-center top-0 right-0"><svg viewBox="0 0 50 100" class="w-full"><path d="M 50,50 L 0,100 L 0,90 L 40,50  L 0,10 L 0,0 Z"></path></svg><div>`;
    const DOTS = Array.from($target.find('.slider').map( (index,element) => `<li class="m-h-xs circle bg-dark dk inline pointer" slide-link-to="${$(element).attr("slide-link-to")}"></li>`)).join('');
    let autoPlayCounter = 0;
    let autoPlay = true;
    let adjustSlideHeight = ()=>{
      let imageLoaded = 0;
      $target.find('.slider.active img').each(function(){
        if($(this)[0].complete){
          imageLoaded++;
          if(imageLoaded == $target.find('.slider.active img').length){
            $target.css('height',`${$target.find('.slider.active').height()}px`);
          }
        }else{
          $(this).load(()=>{
            imageLoaded++;
            if(imageLoaded == $target.find('.slider.active img').length){
              $target.css('height',`${$target.find('.slider.active').height()}px`);
            }
          })
        }
      })
    }
    let changePage = (oldSlide, newSlide, direction='dir-left') => {
      $target.find('.slider').removeClass(`deactive dir-left dir-right`);
      $target.find('.circle').removeClass('active');
      oldSlide.removeClass('active').addClass(`deactive ${direction}`);
      newSlide.addClass(`active ${direction}`);
      $target.find(`.circle[slide-link-to=${newSlide.attr('slide-link-to')}]`).addClass("active");
      adjustSlideHeight();
    }
    if($target.find('.slider').length>1){
      $target.remove('.prev .next .dots').prepend(PREV).append(NEXT).append(`<ul class="text-center pos-abt dots bottom-0 w-full no-margin-l no-margin-r">${DOTS}</ul>`);
    }else{
      $target.find('.slider:first').addClass('active');
      return;
    }
    $target.removeClass('fade slide').addClass('slide');
    $target.removeClass('text-fadeIn').addClass(`text-fadeIn`);
    $target.find('.slider:first,.circle:first').addClass('active');
    adjustSlideHeight();
    // action
    let touchmovePoint = 0;
    let touchanimate = false;
    $target.on('click','.next',()=>{
      if($target.find('.slider.active').next('.slider').length>0){
        changePage( $target.find('.slider.active'), $target.find('.slider.active').next('.slider'), 'dir-right');
      }else if(slideDataObject.circle){
        changePage( $target.find('.slider.active'), $target.find('.slider:first'), 'dir-right');
      }
    })
    $target.on('click','.prev',()=>{
      if($target.find('.slider.active').prev('.slider').length>0){
        changePage( $target.find('.slider.active'), $target.find('.slider.active').prev('.slider'));
      }else if(slideDataObject.circle){
        changePage( $target.find('.slider.active'), $target.find('.slider:last'));
      }
    })
    $target.on('touchstart', function(e) {
      touchmovePoint = e.originalEvent.touches[0].pageX;
      touchanimate = true;
    });
    $target.on('touchmove', function(e) {
      if(touchmovePoint+50 < e.originalEvent.touches[0].pageX && touchanimate){
        $target.find('.prev').trigger("click");
        touchanimate = false;
      }else if(touchmovePoint-50 > e.originalEvent.touches[0].pageX && touchanimate){
        $target.find('.next').trigger("click");
        touchanimate = false;
      }
    });
    $target.on('click','.circle',function(){
      if($(this).index() != $target.find('.circle.active').index()){
        let direction = $(this).index() > $target.find('.circle.active').index() ? 'dir-right' : 'dir-left';
        changePage( $target.find('.slider.active'), $target.find(`.slider[slide-link-to=${$(this).attr('slide-link-to')}]`), direction);
      }
    })
    $target.hover(()=>{
      autoPlayCounter = 0;
      autoPlay = false;
    },()=>{
      autoPlay = true;
    })
      setInterval(()=>{
        if(autoPlay && !$('body').hasClass('js-drawer-open')){
          if ($('#overlay').length == 0) {
            autoPlayCounter++;
            if( autoPlayCounter == 6 ){
              autoPlayCounter = 0;
              $target.find('.next').trigger("click");
            }
          }
        }
      },1000);
    $(window).resize( ()=>adjustSlideHeight() );
  },
  initcheckCurrency: function() {
    $(document).on('click','.currency-selector-trigger[data-currency]',function() {
        GIP.selectCurrency($(this).attr('data-currency'));
    })
    var getCurrency = function() {
      if (typeof GIP != 'undefined') {
        GIP.getLocalizeData().then(function (data) {
          if (data) {
            var country = data.Country;
            var currency = data.Currency;
            if(approvedCountry(country) === 'shippingfee'){
              // $('.currency-policy-text').html('There will be a 20% VAT charge included in the price of your item to abide by UK/European Union tax law.');
              $('.currency-policy-text').html('Dear UK/EU Shopper, <br>Please note all product prices include 20% VAT and there will be no additional charges at checkout.');
            }else if(approvedCountry(country) === 'distributor'){
              $('.currency-policy-text').html(`We're sorry, we are unable to ship to your country. However, we have an <a class="thick-u-l" target="_blank" href="${gerDistributorAddress(country)}">authorized distributor</a> in your country.`);
            }else if(approvedCountry(country) === 'specials'){
              $('.currency-policy-text').html(`Hey! We think you're in China. <a class="thick-u-l" target="_blank" href="${gerDistributorAddress(country)}">Shop There</a>`);
            }else if(approvedCountry(country) === 'noShipping'){
              $('.currency-policy-text').html(`We're sorry, we do not ship to your country at this time.`);
            }
            if(currency != approvedCurrency(currency)){
              $(`#${approvedCurrency(currency)}-currency`).trigger('click');
            }
            if(approvedCountry(country) != 'nothing'&&localStorage.shippingPolicy != 'acknology'){
              localStorage.shippingPolicy = 'acknology';
              Purity.popwindow.open('#currencyPolicyPopWindow', 'content', {width:'750px'});
            }
            if(currency != 'USD' && currency != 'CAD' && currency != 'GBP'){
              let currencyTarget = $(`.currency-selector-trigger[data-currency=${currency}]`)
              $('.additional-currency').removeClass('hide').addClass('selected').attr('data-currency',currency).attr('id',currencyTarget.attr('id'))
                                      .html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 80" version="1.1" class="b-a" height="12">${currencyTarget.find('svg').html()}</svg><span>${currency}</span>`);
            }else{
              $(`.currency-selector span[data-currency=${ currency }]`).addClass('selected');
            }
          } else {
            $(`.currency-selector span[data-currency=USD]`).addClass('selected');
          }
        });
      }else{
        setTimeout(getCurrency,1000);
      }
    }
    var approvedCountry = (country) => {
      if(country=='US' || country=='CA'){
        return 'nothing';
      }else if(country=='BE' || country=='CZ' || country=='EE' || country=='IE' || country=='EL' || country=='ES' || country=='FR' || country=='HR' || country=='CY' || country=='LV' ||
              country=='LT' || country=='LU' || country=='MT' || country=='NL' || country=='AT' || country=='PT' || country=='SK' || country=='FI' || country=='GI' || country=='GL' ||
              country=='IS' || country=='MC' || country=='ME' || country=='NO' || country=='RE' || country=='AD' || country=='DK' || country=='GB' || country=='BG' || country=='HU' ||
              country=='PL' || country=='SE' || country=='CH'){
        return 'shippingfee';
      }else if( country=='CN'){
        return 'specials';
      }else if( country=='AU' || country=='BN' || country=='DE' || country=='IT' || country=='MY' || country=='NZ' || country=='RU' || country=='SG' || country=='SI' || country=='KR' ||
              country=='TW' || country=='CZ' || country=='FI' || country=='LT' || country=='NL'){
        return 'distributor';
      }else{
        return 'noShipping';
      }
    }
    var approvedCurrency = (currency) => {
      if(currency == 'USD' || currency == 'CAD' || currency == 'GBP' || currency == 'BGN' || currency == 'DKK' || currency == 'HUF' || currency == 'PLN' ||
          currency == 'SEK' || currency == 'CHF' || currency == 'EUR'){
        return currency;
      }else if(currency == 'CZK' || currency == 'HRK'){
        return 'EUR';
      }else{
        return 'USD';
      }
    }
    var gerDistributorAddress = (country) => {
      switch (country){
        case 'AU':
          return 'http://www.nourishedlife.com.au';
        case 'BN':
          return 'http://www.pure100percent.com';
        case 'DE':
          return 'http://www.100percentpure.de';
        case 'IT':
          return 'http://www.gaianaturashop.it/prodotto/100pure';
        case 'MY':
          return 'https://www.100percentpure.com.my/';
        case 'NZ':
          return 'http://www.nourishedlife.com.au';
        case 'RU':
          return 'http://www.organica-usda.ru/brend/100-pure';
        case 'SG':
          return 'http://www.100percentpure.com.sg';
        case 'SI':
          return 'http://www.or-ca.si/100_Pure.html';
        case 'KR':
          return 'http://www.100propure.co.kr';
        case 'TW':
          return 'http://www.pcstore.com.tw/juicyskin/';
        case 'CZ':
          return 'http://www.100percentpure.cz';
        case 'FI':
          return 'http://100percentpure.koriin.fi';
        case 'LT':
          return 'http://www.100pure.lt/';
        case 'NL':
          return 'http://www.100procentnatuurlijk.nl/';
        case 'CN':
          return 'https://www.100purity.cn/';
        default:
          return 'https://www.100percentpure.com/'
      }
    }
    getCurrency();
  },
  createAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    //Check to see if need to rearrange product tabs to create accordion (backwards compatible)
    if (container.indexOf(".accordion-tabs") >= 0){
      var rearrangedTabs = $.map($tab, function(v, i) { return [v, $content[i]]; });
      $container.empty();

      $.each(rearrangedTabs, function (index, value) {
        $container.append(this);
      });

      $content.removeClass('active');
      $container.find('.active').next().slideToggle();

      tab = container + '> a';
    }

    $(container).children('a').each(function(i, tab) {
      var tab = $(this);
      var tabValue = tab.attr('href'); //get tab id
      tab.attr('data-tab-value', tabValue); //set tab id in data attribute
      tab.removeAttr("href"); //remove href (to prevent url hash update)
    });

    $(tab + '.active').next().slideToggle();
    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  initializeTabs: function(){
    var tabs = $('ul.tabs > li > a');

    tabs.each(function(i, tab) {
      var tab = $(this);
      var tabValue = tab.attr('href'); //get tab id
      tab.attr('data-tab-value', tabValue); //set tab id in data attribute
      tab.removeAttr("href"); //remove href (to prevent url hash update)
    });

    $('body').on('click', 'ul.tabs > li > a', function(e) {
      e.preventDefault();

      var contentLocation = $(this).data('tab-value');

      console.log('click')
      if(contentLocation.charAt(0)=="#") {
        $('ul.tabs > li > a.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
      }
    });
  },
  topBannerMessage: function() {
    var $el = $('.close-message'),
        $target = $('#TopBannerMessage'),
        cookie = Holly.getCookie('top_banner_message');
        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('reload')
        });
        $(window).load(()=>{
          let topBannerHeight = 0;
          $('#TopBannerMessage p').each(function(i,e){
            topBannerHeight = Math.max($(e).height(), topBannerHeight);
          })
          $('#TopBannerMessage').css('height',`${topBannerHeight+16}px`)
          function myFunction(x) {
            if (x.matches) { // If media query matches
              $('.main-content').css('margin-top',`${$('.mobile-nav--container').height()}px`)
            } else {
              $('.main-content').css('margin-top','0')
            }
          }
          var x = window.matchMedia("(max-width: 768px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
        })

    // tobanner animation
    if ($('#TopBannerMessage p').length > 1) {
      $('#TopBannerMessage p').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(){
        $(this).removeClass('active pos-rlt').addClass('pos-abt top-0');
        if ($(this).next('p').length>0) {
          $(this).next('p').addClass('active pos-rlt').removeClass('pos-abt top-0');
        }else {
          $('#TopBannerMessage p').eq(0).addClass('active pos-rlt').removeClass('pos-abt top-0');
        }
      });
    }else if ($('#TopBannerMessage p').length > 0) {
      $('#TopBannerMessage p').removeClass('active').addClass('unmuted');
    }else{

    }
    // If cookie => do ajax to get counter
    if (typeof(cookie) == 'undefined') {
      $target.fadeIn(300).removeClass('hide')
      // Holly.ajaxBackendData()
    }
    // Click function to hide message
    $el.click(function(e) {
      e.preventDefault()
      $target.fadeOut(500, function() {
        var $this = $(this)
        $this.hide(function() {
          if (!cookie) {
            // If !cookie => set setCookie for 5 days
            Holly.setCookie('top_banner_message', 'true', 5)
          }
        })
      })
    })
  },
  initScrollTop: function() {
    var $el = $('.scroll-top')
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 500) {
        $el.fadeIn()
      } else {
        $el.fadeOut()
      }
    });
    $el.click(function() {
      $('html, body').stop().animate({
        scrollTop: 0
      })
    })
  },
  initScrollToDiv: function() {
    $(document).on('click', 'a[href^="#"]', function(e) {
      var id = $(this).attr('href');
      var $id = $(id)
      if ($id.length === 0) {
        return
      }
      e.preventDefault()
      var position = $id.offset().top;
      $('body, html').animate({ scrollTop: position })
    })
  },
  initBgLazyLoad: function() {
    if (!window.HTMLPictureElement) {
      console.log('initBgLazyLoad loaded.')
      Holly.loadJS('https://cdn.shopify.com/s/files/1/0648/1955/t/274/assets/ls.respimg.min.js');
    }
  },
  initUpgradeBrowser: function() {
    var version = Holly.detectIE();

    if (version === false) {
      console.log('Modern Browser detected.');
    } else if (version >= 12) {
      console.log('IE above version 12.');
    } else {

      var message = '<div class="text-center b-b p-sm">For better browsing experience/security, please upgrade your browser to <a class="brand-primary" href="https://www.google.com/chrome/browser/features.html?brand=CHBD&gclid=CPHlu7D4gNECFQ13fgodzTMEXA&dclid=CKyU0LD4gNECFcV1YgodhcQHWQ" target="_blank">Google Chrome</>.</div>';

      $('body').prepend(message);
    }
  },
  initReadReferringUrl: function() {
    if (document.location.search.length) {
      var referralSource = Holly.getParameterByName('ref');
      if (referralSource) {
        Holly.updateCartNote(referralSource);
      }
    } else {
      return false
    }
  },
  initCollectionDescription: function() {
    // hide paragraph copy
    $(".description").find("p:not(:first), .p-tag span:not(:first)").hide();

    // toggle editing
    $('.read-more').click(function () {
      $(this).text(function(i, txt){
        var toggleDescription = ( txt === 'Read More' ) ? $(".description").find("p, .p-tag span").fadeIn() && $('.read-more').text('Read Less'): $(".description").find("p:not(:first), .p-tag span:not(:first)").hide() && $('.read-more').text('Read More');
      });
    });
  },
  initImgLazyLoad: function() {
    if(Boolean($('img.lazy').length)){
      $('img.lazy').show().lazyload({
        event: "scrollstop"
      });
    }
  },
  initGwpFilter: function() {
    if(Cookies.get('utm_campaign') != null && Cookies.get('utm_campaign') == "a_sgwp") {

      $('.gwpTarget').remove();
    }
  },
  initImgOnLoadBlur: function() {

    window.onload = function() {

      var placeholder = document.querySelectorAll('.placeholder');

      [].forEach.call(placeholder, function(placeholder) {

        var small = placeholder.querySelector('.img-small');

        // placeholder.style.color = "red";
        // console.log('placeholder: ', placeholder)
        // console.log('small: ', small)
        // 2: load small image
        var img = new Image();
        img.src = small.src;
        img.onload = function () {
          small.classList.add('loaded');
        };

        // 2: load large image
        var imgLarge = new Image();
        imgLarge.src = placeholder.dataset.large;
        imgLarge.onload = function () {
          imgLarge.classList.add('loaded');
        };
        placeholder.appendChild(imgLarge);

      }, function() {
        // turn back the background to #fff
        placeholder.style.backgroundColor = "#fff";
        small.style.visibility = 'hidden';
      });
    }
  },
  initAccordion: function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var links = this.el.find('.link');

      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      }
    }
    // create new instance of Accordion here
    var accordion__IndexWhatsNew = new Accordion($('.accordion'), false);
  },
  initToggleAccordion: function() {
    // not complete -- testing
    var $el = $('.accordion li .link')
    $el.on('click', function(e) {

      console.log('clicking')

      var $this = $(this)
      var $target = $this.parent()

      console.log($this)

      if ($target.hasClass('open')) {
        console.log('open')
      } else {
        console.log('close')
      }
      e.preventDefault()
    })
  },
  initMobileMenu: function() {
    // animate menu icon if icon is clicked
    $('.nav-open').on('click', function(e) {
      $(this).toggleClass('nav-close');
      e.preventDefault();
    })
    $('#PageContainer').on('click', function() {
      $('.nav-open').removeClass('nav-close');
      $('.nav-open').css('display', 'inline-block');
    });
  },
  initOpenSearch: function() {
    $('button#open-search-btn, .search-label, button#open-mobile-search-btn').click(function(e) {
      e.preventDefault(), Holly.focusLogoOut(), Holly.displayOverlay();
      $('input[type="search"]').focus();
      $('form').addClass('opened');

      var getSearchWidth = $('header.site-header').width() | $('#MobileMenu .grid--full').width();
      $('#search-bar form.opened').css({
        'width': getSearchWidth,
        'z-index': 10000,
        'left': 0
      });

      $('#search-bar .input-group-field').css('width', getSearchWidth);
    });

    $('input[type="search"]').on('focusout', function(e) {
      $('form').removeClass('opened');
      $('#search-bar .input-group-field').css('width', 0);
      $('#search-bar form').css({
        'width': 'auto',
        'z-index': 0
      });
      setTimeout(()=>{$('.snize-ac-results').css('display','none');},500);
      Holly.removeOverlay();
    });

    $('input[type="search"]').on('keyup', function (e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        $('form').removeClass('opened');
        $('#search-bar .input-group-field').css('width', 0);
        $('#search-bar form').css({
          'width': 'auto',
          'z-index': 0
        });
        setTimeout(()=>{$('.snize-ac-results').css('display','none');},500);
        Holly.removeOverlay();
      }
  });
  
  },
  /*
  **------------------------------------------------------------------------**
  * START GLOBAL PROMO ITEM **
  * DO NOT REGISTER in Holly.init()
  **------------------------------------------------------------------------**
  */
  PromoItem: function(variant_id, title, handle, value, threshold) {
    this.variant_id = variant_id;
    this.title = title;
    this.handle = handle;
    this.value = value;
    this.threshold = threshold;
  },
  /*
  **------------------------------------------------------------------------**
  * END GLOBAL PROMO ITEM
  **------------------------------------------------------------------------**
  */

  /*
  **------------------------------------------------------------------------**
  * START HELPER FUNCTION **
  * DO NOT REGISTER in Holly.init()
  **------------------------------------------------------------------------**
  */
  detectIE: function() {
    var ua = window.navigator.userAgent;
    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
  },
  loadExtScript: function(src, test, callback) {
    var s = document.createElement('script')
    s.src = src
    document.body.appendChild(s)

    var callbackTimer = setInterval(function() {
      var call = false
      try {
        call = test.call()
      } catch (e) {}

      if (call) {
        clearInterval(callbackTimer)
        callback.call()
      }
    }, 100)
  },
  updateCartNote: function (note) {
    var params = {
      type: 'POST',
      url: '/cart/update.js',
      data: 'note=' + attributeToString(note),
      dataType: 'json',
      success: function(cart) {
        console.log('note: ', cart.note)
      },
      error: function(XMLHttpRequest, textStatus) {
        Shopify.onError(XMLHttpRequest, textStatus);
      }
    };
    jQuery.ajax(params);
  },
  ajaxBackendData: function(url, callBack) {
    var DreamFactoryKey = '4a815c7925a193b651990bdcd428412a1067a8c2c444e9fad95115cf5781acd0';
    $.ajax({
      url: url,
      type: 'GET'/*,
      headers: {
        'X-DreamFactory-Api-Key': DreamFactoryKey
      }*/,
      contentType: "application/json; charset=utf-8",
      cache: false,
      success: callBack,
      error: function(textStatus) {
        console.log(textStatus);
      }
    });
  },
  getParameterByName: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },
  getShopifyDesc: function() {
    // console.log(productHandle);
    $.getJSON('/products/' + productHandle + '.js', function (product, textStatus) {
      if (textStatus === 'success') {
        $('.product-modal-description').html(product.description);
      } else {
        return false
      }
    });
  },
  getCart: function(callback) {
    jQuery.getJSON('/cart.js', function (cart, textStatus) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        Shopify.onCartUpdate(cart);
      }
    })
  },
  getCookie: function(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  },
  setCookie: function(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  },
  deleteCookie: function(name) {
    Holly.setCookie(name,"",-1);
  },
  hideLoadingSpinner: function() {
    $('.loaders-container').addClass('hide');
  },
  showLoadingSpinner: function(divTarget) {
      Holly.injectSpinner(divTarget);
    $('.loaders-container').removeClass('hide');
  },
  injectSpinner: function(divTarget) {
    var $divTarget = divTarget;
    var spinner = '<div class="loaders-container hide"> <div class="container"> <div class="circle"></div></div></div>';
    $divTarget.append(spinner);
  },
  focusLogoOut: function() {
    $('.site-header__logo-link img').addClass('z-index-down');
    $('.site-header__logo-link img').removeClass('z-index-up');
  },
  displayOverlay: function() {
    var overlay = $('<div id="overlay"> </div>');
    overlay.appendTo('#PageContainer');
  },
  removeOverlay: function() {
    $('#overlay').remove();
  },
  testHolly: function() {
    console.log("Holly loaded!");
  },
  insertDecimal: function(num) {
    return (num / 100).toFixed(2);
  },
  hasUndefined: function(array) {
    if (array.indexOf() !== -1) {
      return true
    } else {
      return false
    }
  },
  getStringAfterEqual: function(str) {
    return str.split('=')[1];
  },
  getStringBeforeEqual: function(str) {
    return str.split('=')[0];
  },
  loadJS: function(u) {
    var r = document.getElementsByTagName("script")[0],
        s = document.createElement("script");
        s.src = u;
        r.parentNode.insertBefore(s, r);
  },
  contains: function() {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if (!findNaN && typeof Array.prototype.indexOf === 'function') {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(needle) {
        var i = -1,
          index = -1;

        for (i = 0; i < this.length; i++) {
          var item = this[i];

          if ((findNaN && item !== item) || item === needle) {
            index = i;
            break;
          }
        }

        return index;
      };
    }

    return indexOf.call(this, needle) > -1;
  },
  detectAccent: function(toFormatStr) {
    return toFormatStr.replace(/([àáâãäå])|([ÀÁÂÃÄÅ])|([ç])|([èéêë])|([ÈÉÊË])|([ìíîï])|([ÌÍÎÏ])|([ñÑ])|([òóôõöø])|([ÒÓÔÕÖØ])|([ß])|([ùúûü])|([ÙÚÛÜ])|([ÿÝ])|([æÆ])/g,
    function(str, a, aA, c, e, eE, i, iI, n, o, oO, s, u, uU, y, ae) {
      if (a) return "'";
      else if (aA) return '';
      else if (c) return '';
      else if (e) return '';
      else if (eE) return '';
      else if (i) return '';
      else if (iI) return '';
      else if (n) return '';
      else if (o) return '';
      else if (oO) return '';
      else if (s) return '';
      else if (u) return '';
      else if (uU) return '';
      else if (y) return '';
      else if (ae) return '';
    });
  },
  initWishList: ()=>{
    $(document).on("click",".remove-wishlist",function(){
      $.ajax({
        url: `/tools/customer_profile?user_id=${$(this).attr('user-id')}&wish_list=remove&product_handle=${$(this).attr('product-handle')}`,
        type: "GET",
        contentType: "application/liquid",
      }).done(function() {
        $('.remove-wishlist').removeClass('remove-wishlist wl-icon-heart').addClass('add-wishlist wl-icon-heart-o');
      }).fail(function(data) {
        alert("We are so sorry but seems some error occurred. Please try again");
        console.log("fail to submit!!", data);
      })
    });
    $(document).on("click",".add-wishlist",function(){
      $.ajax({
        url: `/tools/customer_profile?user_id=${$(this).attr('user-id')}&wish_list=add&product_handle=${$(this).attr('product-handle')}`,
        type: "GET",
        contentType: "application/liquid",
      }).done(function() {
        $('.add-wishlist').removeClass('add-wishlist wl-icon-heart-o').addClass('remove-wishlist wl-icon-heart');
      }).fail(function(data) {
        alert("We are so sorry but seems some error occurred. Please try again");
        console.log("fail to submit!!", data);
      })
    });
  }
  /*
  **------------------------------------------------------------------------**
  * END HELPER FUNCTION
  **------------------------------------------------------------------------**
  */
};
var IndexObj = IndexObj || {};
IndexObj = {
  init: function() {
    this.initMainModuleSlickCarousel();
    this.initMiniModuleSlickCarousel();
    this.initBlogSectionSlickCarousel();
    this.featuredProductSlickCarousel();
    Purity.sameHeight.cancle();
    Purity.sameHeight.set();
  },
  featuredProductSlickCarousel: function() {

    var $window = $(window),
        $el = $('.featured-carousel .init-carousel');

    $window.trigger('resize');

    $('.featured-carousel .init-carousel').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerPadding: '20px',
            centerMode: false,
            slidesToShow: 2
          }
        }
      ]
    })
  },
  initBlogSectionSlickCarousel: function() {
    $('#blogSection .init-carousel').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    })
  },
  initMainModuleSlickCarousel: function() {
    $('.main-module .init-carousel').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    })
  },
  initMiniModuleSlickCarousel: function() {
    $('.mini-module .init-carousel').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    })
  }
};
// cloudinary
var cloudinaryimg = cloudinary.Cloudinary.new({cloud_name: "purity"});
$(document).ready(function() {
  var bundleIds = bundleIds || []
  Holly.init(bundleIds)
  IndexObj.init()
  cloudinaryimg.config('round_dpr', false);
  cloudinaryimg.config('responsive_use_breakpoints', false);
  cloudinaryimg.responsive();
})

/*============================================================================
  Swatch
==============================================================================*/
jQuery(function() {
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });
});
/*============================================================================
  ./Swatch
==============================================================================*/

/*/ ********************** VENDOR JS LIB ********************** /*/
/* Jquery cookies */
!function(a){var b=!1;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}return e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape),document.cookie=[b,"=",e,f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}b||(g={});for(var i=document.cookie?document.cookie.split("; "):[],j=/(%[0-9A-Z]{2})+/g,k=0;k<i.length;k++){var l=i[k].split("="),m=l.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{var n=l[0].replace(j,decodeURIComponent);if(m=c.read?c.read(m,n):c(m,n)||m.replace(j,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(b===n){g=m;break}b||(g[n]=m)}catch(a){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})});
/*! lazysizes - v3.0.0-rc3 */


/* Support for lazyloading responsive background images */
/*! lazysizes - v3.0.0-rc3 */
!function(){"use strict";if(window.addEventListener){var a=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,c=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,d=/\(|\)|'/,e={contain:1,cover:1},f=function(a){var b=lazySizes.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},g=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!e[b]&&e[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},h=function(d,e,f){var g=document.createElement("picture"),h=e.getAttribute(lazySizesConfig.sizesAttr),i=e.getAttribute("data-ratio"),j=e.getAttribute("data-optimumx");e._lazybgset&&e._lazybgset.parentNode==e&&e.removeChild(e._lazybgset),Object.defineProperty(f,"_lazybgset",{value:e,writable:!0}),Object.defineProperty(e,"_lazybgset",{value:g,writable:!0}),d=d.replace(a," ").split(b),g.style.display="none",f.className=lazySizesConfig.lazyClass,1!=d.length||h||(h="auto"),d.forEach(function(a){var b=document.createElement("source");h&&"auto"!=h&&b.setAttribute("sizes",h),a.match(c)&&(b.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&b.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),g.appendChild(b)}),h&&(f.setAttribute(lazySizesConfig.sizesAttr,h),e.removeAttribute(lazySizesConfig.sizesAttr),e.removeAttribute("sizes")),j&&f.setAttribute("data-optimumx",j),i&&f.setAttribute("data-ratio",i),g.appendChild(f),e.appendChild(g)},i=function(a){if(a.target._lazybgset){var b=a.target,c=b._lazybgset,e=b.currentSrc||b.src;e&&(c.style.backgroundImage="url("+(d.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(lazySizes.fire(c,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var b,c,d;!a.defaultPrevented&&(b=a.target.getAttribute("data-bgset"))&&(d=a.target,c=document.createElement("img"),c.alt="",c._lazybgsetLoading=!0,a.detail.firesLoad=!0,h(b,d,c),setTimeout(function(){lazySizes.loader.unveil(c),lazySizes.rAF(function(){lazySizes.fire(c,"_lazyloaded",{},!0,!0),c.complete&&i({target:c})})}))}),document.addEventListener("load",i,!0),window.addEventListener("lazybeforesizes",function(a){if(a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,c=g(b);e[c]&&(a.target._lazysizesParentFit=c,lazySizes.rAF(function(){a.target.setAttribute("data-parent-fit",c),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),document.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&(a.detail.width=f(a.target._lazybgset))})}}();

/* Support for lazyloading responsive background images */
/*! lazysizes - v3.0.0-rc3 */
!function(a,b,c){"use strict";var d,e=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,c=Array.prototype.forEach;return function(d){var e=b.createElement("img"),f=function(b){var c,d=b.getAttribute(lazySizesConfig.srcsetAttr);d&&(d.match(a)&&(c="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1,c&&b.setAttribute("data-aspectratio",c)),b.setAttribute(lazySizesConfig.srcsetAttr,d.replace(h,"")))},g=function(a){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&c.call(b.getElementsByTagName("source"),f),f(a.target)},i=function(){e.currentSrc&&b.removeEventListener("lazybeforeunveil",g)};d[1]&&(b.addEventListener("lazybeforeunveil",g),e.onload=i,e.onerror=i,e.srcset="data:,a 1w 1h",e.complete&&i())}}();if(e||(e={},a.lazySizesConfig=e),e.supportsType||(e.supportsType=function(a){return!a}),!a.picturefill&&!e.pf){if(a.HTMLPictureElement&&g)return b.msElementsFromPoint&&i(navigator.userAgent.match(/Edge\/(\d+)/)),void(e.pf=function(){});e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;e>c;c++)d(b.elements[c])},d=function(){var c=function(a,b){return a.w-b.w},f=/^\s*\d+px\s*$/,i=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},j=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),k=function(){k.init||(k.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;b>a;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},l=function(b,c){var d,f=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!f&&c&&(f=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==f||(d=j(f||""),c&&b.parentNode&&(d.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),d.isPicture&&a.matchMedia&&(lazySizes.aC(b,"lazymatchmedia"),k())),d._set=f,Object.defineProperty(b,"_lazypolyfill",{value:d,writable:!0}))},m=function(b){var c=a.devicePixelRatio||1,d=lazySizes.getX&&lazySizes.getX(b);return Math.min(d||c,2.5,c)},n=function(b){return a.matchMedia?(n=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},o=function(a){var b,d,g,h,j,k,o;if(h=a,l(h,!0),j=h._lazypolyfill,j.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;g>d;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&n(b[d].getAttribute("media"))){h=b[d],l(h),j=h._lazypolyfill;break}return j.length>1?(o=h.getAttribute("sizes")||"",o=f.test(o)&&parseInt(o,10)||lazySizes.gW(a,a.parentNode),j.d=m(a),!j.src||!j.w||j.w<o?(j.w=o,k=i(j.sort(c)),j.src=k):k=j.src):k=j[0],k},p=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=o(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return p.parse=j,p}(),e.loadedClass&&e.loadingClass&&!function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}()}}(window,document),function(a){"use strict";var b,c=a.createElement("img");!("srcset"in c)||"sizes"in c||window.HTMLPictureElement||(b=/^picture$/i,a.addEventListener("lazybeforeunveil",function(c){var d,e,f,g,h,i,j;!c.defaultPrevented&&!lazySizesConfig.noIOSFix&&(d=c.target)&&(f=d.getAttribute(lazySizesConfig.srcsetAttr))&&(e=d.parentNode)&&((h=b.test(e.nodeName||""))||(g=d.getAttribute("sizes")||d.getAttribute(lazySizesConfig.sizesAttr)))&&(i=h?e:a.createElement("picture"),d._lazyImgSrc||Object.defineProperty(d,"_lazyImgSrc",{value:a.createElement("source"),writable:!0}),j=d._lazyImgSrc,g&&j.setAttribute("sizes",g),j.setAttribute(lazySizesConfig.srcsetAttr,f),d.setAttribute("data-pfsrcset",f),d.removeAttribute(lazySizesConfig.srcsetAttr),h||(e.insertBefore(i,d),i.appendChild(d)),i.insertBefore(j,d))}))}(document);
// HandleBars
var Handlebars=function(){var e=function(){"use strict";function t(e){this.string=e}var e;t.prototype.toString=function(){return""+this.string};e=t;return e}();var t=function(e){"use strict";function o(e){return r[e]||"&"}function u(e,t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}function c(e){if(e instanceof n){return e.toString()}else if(!e&&e!==0){return""}e=""+e;if(!s.test(e)){return e}return e.replace(i,o)}function h(e){if(!e&&e!==0){return true}else if(l(e)&&e.length===0){return true}else{return false}}var t={};var n=e;var r={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var i=/[&<>"'`]/g;var s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e==="function"};if(f(/x/)){f=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"}}var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e==="object"?a.call(e)==="[object Array]":false};t.isArray=l;t.escapeExpression=c;t.isEmpty=h;return t}(e);var n=function(){"use strict";function n(e,n){var r;if(n&&n.firstLine){r=n.firstLine;e+=" - "+r+":"+n.firstColumn}var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++){this[t[s]]=i[t[s]]}if(r){this.lineNumber=r;this.column=n.firstColumn}}var e;var t=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error;e=n;return e}();var r=function(e,t){"use strict";function h(e,t){this.helpers=e||{};this.partials=t||{};p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new i("Missing helper: '"+e+"'")}});e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;if(f(t)){t=t.call(this)}if(t===true){return i(this)}else if(t===false||t==null){return r(this)}else if(a(t)){if(t.length>0){return e.helpers.each(t,n)}else{return r(this)}}else{return i(t)}});e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse;var i=0,s="",o;if(f(e)){e=e.call(this)}if(t.data){o=m(t.data)}if(e&&typeof e==="object"){if(a(e)){for(var u=e.length;i<u;i++){if(o){o.index=i;o.first=i===0;o.last=i===e.length-1}s=s+n(e[i],{data:o})}}else{for(var l in e){if(e.hasOwnProperty(l)){if(o){o.key=l;o.index=i;o.first=i===0}s=s+n(e[l],{data:o});i++}}}}if(i===0){s=r(this)}return s});e.registerHelper("if",function(e,t){if(f(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||r.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}});e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})});e.registerHelper("with",function(e,t){if(f(e)){e=e.call(this)}if(!r.isEmpty(e))return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={};var r=e;var i=t;var s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t){throw new i("Arg not supported with multiple helpers")}r.extend(this.helpers,e)}else{if(n){t.not=n}this.helpers[e]=t}},registerPartial:function(e,t){if(l.call(e)===c){r.extend(this.partials,e)}else{this.partials[e]=t}}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];if(typeof console!=="undefined"&&console[n]){console[n].call(console,t)}}}};n.logger=d;n.log=v;var m=function(e){var t={};r.extend(t,e);return t};n.createFrame=m;return n}(t,n);var i=function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function f(e,t){if(!t){throw new s("No environment passed to template")}var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null){return a}if(t.compile){var f={helpers:i,partials:o,data:u};o[n]=t.compile(e,{data:u!==undefined},t);return o[n](r,f)}else{throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")}};var r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];if(n){r=c(e,t,n)}else if(!r){r=this.programs[e]=c(e,t)}return r},merge:function(e,t){var n=e||t;if(e&&t&&e!==t){n={};i.extend(n,t);i.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;if(!i.partial){o=i.helpers;u=i.partials}var a=e.call(r,s,n,o,u,i.data);if(!i.partial){t.VM.checkRevision(r.compilerInfo)}return a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3);var i=function(e,i){i=i||{};return t.apply(this,[e,i.data||n].concat(r))};i.program=e;i.depth=r.length;return i}function c(e,t,n){var r=function(e,r){r=r||{};return t(e,r.data||n)};r.program=e;r.depth=0;return r}function h(e,t,n,r,i,o){var u={partial:true,helpers:r,partials:i,data:o};if(e===undefined){throw new s("The partial "+t+" could not be found")}else if(e instanceof Function){return e(n,u)}}function p(){return""}var r={};var i=e;var s=t;var o=n.COMPILER_REVISION;var u=n.REVISION_CHANGES;r.checkRevision=a;r.template=f;r.programWithDepth=l;r.program=c;r.invokePartial=h;r.noop=p;return r}(t,n,r);var s=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n;var f=r;var l=i;var c=function(){var e=new o.HandlebarsEnvironment;f.extend(e,o);e.SafeString=u;e.Exception=a;e.Utils=f;e.VM=l;e.template=function(t){return l.template(t,e)};return e};var h=c();h.create=c;s=h;return s}(r,e,n,t,i);var o=function(e){"use strict";function r(e){e=e||{};this.firstLine=e.first_line;this.firstColumn=e.first_column;this.lastColumn=e.last_column;this.lastLine=e.last_line}var t;var n=e;var i={ProgramNode:function(e,t,n,s){var o,u;if(arguments.length===3){s=n;n=null}else if(arguments.length===2){s=t;t=null}r.call(this,s);this.type="program";this.statements=e;this.strip={};if(n){u=n[0];if(u){o={first_line:u.firstLine,last_line:u.lastLine,last_column:u.lastColumn,first_column:u.firstColumn};this.inverse=new i.ProgramNode(n,t,o)}else{this.inverse=new i.ProgramNode(n,t)}this.strip.right=t.left}else if(t){this.strip.left=t.right}},MustacheNode:function(e,t,n,s,o){r.call(this,o);this.type="mustache";this.strip=s;if(n!=null&&n.charAt){var u=n.charAt(3)||n.charAt(2);this.escaped=u!=="{"&&u!=="&"}else{this.escaped=!!n}if(e instanceof i.SexprNode){this.sexpr=e}else{this.sexpr=new i.SexprNode(e,t)}this.sexpr.isRoot=true;this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){r.call(this,n);this.type="sexpr";this.hash=t;var i=this.id=e[0];var s=this.params=e.slice(1);var o=this.eligibleHelper=i.isSimple;this.isHelper=o&&(s.length||t)},PartialNode:function(e,t,n,i){r.call(this,i);this.type="partial";this.partialName=e;this.context=t;this.strip=n},BlockNode:function(e,t,i,s,o){r.call(this,o);if(e.sexpr.id.original!==s.path.original){throw new n(e.sexpr.id.original+" doesn't match "+s.path.original,this)}this.type="block";this.mustache=e;this.program=t;this.inverse=i;this.strip={left:e.strip.left,right:s.strip.right};(t||i).strip.left=e.strip.right;(i||t).strip.right=s.strip.left;if(i&&!t){this.isInverse=true}},ContentNode:function(e,t){r.call(this,t);this.type="content";this.string=e},HashNode:function(e,t){r.call(this,t);this.type="hash";this.pairs=e},IdNode:function(e,t){r.call(this,t);this.type="ID";var i="",s=[],o=0;for(var u=0,a=e.length;u<a;u++){var f=e[u].part;i+=(e[u].separator||"")+f;if(f===".."||f==="."||f==="this"){if(s.length>0){throw new n("Invalid path: "+i,this)}else if(f===".."){o++}else{this.isScoped=true}}else{s.push(f)}}this.original=i;this.parts=s;this.string=s.join(".");this.depth=o;this.isSimple=e.length===1&&!this.isScoped&&o===0;this.stringModeValue=this.string},PartialNameNode:function(e,t){r.call(this,t);this.type="PARTIAL_NAME";this.name=e.original},DataNode:function(e,t){r.call(this,t);this.type="DATA";this.id=e},StringNode:function(e,t){r.call(this,t);this.type="STRING";this.original=this.string=this.stringModeValue=e},IntegerNode:function(e,t){r.call(this,t);this.type="INTEGER";this.original=this.integer=e;this.stringModeValue=Number(e)},BooleanNode:function(e,t){r.call(this,t);this.type="BOOLEAN";this.bool=e;this.stringModeValue=e==="true"},CommentNode:function(e,t){r.call(this,t);this.type="comment";this.comment=e}};t=i;return t}(n);var u=function(){"use strict";var e;var t=function(){function t(e,t){return{left:e.charAt(2)==="~",right:t.charAt(0)==="~"||t.charAt(1)==="~"}}function r(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(n,r,i,s,o,u,a){var f=u.length-1;switch(o){case 1:return new s.ProgramNode(u[f-1],this._$);break;case 2:return new s.ProgramNode([],this._$);break;case 3:this.$=new s.ProgramNode([],u[f-1],u[f],this._$);break;case 4:this.$=new s.ProgramNode(u[f-2],u[f-1],u[f],this._$);break;case 5:this.$=new s.ProgramNode(u[f-1],u[f],[],this._$);break;case 6:this.$=new s.ProgramNode(u[f],this._$);break;case 7:this.$=new s.ProgramNode([],this._$);break;case 8:this.$=new s.ProgramNode([],this._$);break;case 9:this.$=[u[f]];break;case 10:u[f-1].push(u[f]);this.$=u[f-1];break;case 11:this.$=new s.BlockNode(u[f-2],u[f-1].inverse,u[f-1],u[f],this._$);break;case 12:this.$=new s.BlockNode(u[f-2],u[f-1],u[f-1].inverse,u[f],this._$);break;case 13:this.$=u[f];break;case 14:this.$=u[f];break;case 15:this.$=new s.ContentNode(u[f],this._$);break;case 16:this.$=new s.CommentNode(u[f],this._$);break;case 17:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 18:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 19:this.$={path:u[f-1],strip:t(u[f-2],u[f])};break;case 20:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 21:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 22:this.$=new s.PartialNode(u[f-2],u[f-1],t(u[f-3],u[f]),this._$);break;case 23:this.$=t(u[f-1],u[f]);break;case 24:this.$=new s.SexprNode([u[f-2]].concat(u[f-1]),u[f],this._$);break;case 25:this.$=new s.SexprNode([u[f]],null,this._$);break;case 26:this.$=u[f];break;case 27:this.$=new s.StringNode(u[f],this._$);break;case 28:this.$=new s.IntegerNode(u[f],this._$);break;case 29:this.$=new s.BooleanNode(u[f],this._$);break;case 30:this.$=u[f];break;case 31:u[f-1].isHelper=true;this.$=u[f-1];break;case 32:this.$=new s.HashNode(u[f],this._$);break;case 33:this.$=[u[f-2],u[f]];break;case 34:this.$=new s.PartialNameNode(u[f],this._$);break;case 35:this.$=new s.PartialNameNode(new s.StringNode(u[f],this._$),this._$);break;case 36:this.$=new s.PartialNameNode(new s.IntegerNode(u[f],this._$));break;case 37:this.$=new s.DataNode(u[f],this._$);break;case 38:this.$=new s.IdNode(u[f],this._$);break;case 39:u[f-2].push({part:u[f],separator:u[f-1]});this.$=u[f-2];break;case 40:this.$=[{part:u[f]}];break;case 43:this.$=[];break;case 44:u[f-1].push(u[f]);break;case 47:this.$=[u[f]];break;case 48:u[f-1].push(u[f]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function m(){var e;e=n.lexer.lex()||1;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;var g,y,b,w,E,S,x={},T,N,C,k;while(true){b=r[r.length-1];if(this.defaultActions[b]){w=this.defaultActions[b]}else{if(g===null||typeof g=="undefined"){g=m()}w=o[b]&&o[b][g]}if(typeof w==="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])if(this.terminals_[T]&&T>2){k.push("'"+this.terminals_[T]+"'")}if(this.lexer.showPosition){L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1){throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g)}switch(w[0]){case 1:r.push(g);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(w[1]);g=null;if(!y){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;p=this.lexer.yylloc;if(l>0)l--}else{g=y;y=null}break;case 2:N=this.productions_[w[1]][1];x.$=i[i.length-N];x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column};if(d){x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]}S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!=="undefined"){return S}if(N){r=r.slice(0,-1*N*2);i=i.slice(0,-1*N);s=s.slice(0,-1*N)}r.push(this.productions_[w[1]][0]);i.push(x.$);s.push(x._$);C=o[r[r.length-2]][r[r.length-1]];r.push(C);break;case 3:return true}}return true}};var n=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1)this.yylineno-=n.length-1;var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}return this},more:function(){this._more=true;return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var e,t,n,r,i,s;if(!this._more){this.yytext="";this.match=""}var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g);if(s)this.yylineno+=s.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(e)return e;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};e.options={};e.performAction=function(t,n,r,i){function s(e,t){return n.yytext=n.yytext.substr(e,n.yyleng-t)}var o=i;switch(r){case 0:if(n.yytext.slice(-2)==="\\\\"){s(0,1);this.begin("mu")}else if(n.yytext.slice(-1)==="\\"){s(0,1);this.begin("emu")}else{this.begin("mu")}if(n.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:s(0,4);this.popState();return 15;break;case 4:return 35;break;case 5:return 36;break;case 6:return 25;break;case 7:return 16;break;case 8:return 20;break;case 9:return 19;break;case 10:return 19;break;case 11:return 23;break;case 12:return 22;break;case 13:this.popState();this.begin("com");break;case 14:s(3,5);this.popState();return 15;break;case 15:return 22;break;case 16:return 41;break;case 17:return 40;break;case 18:return 40;break;case 19:return 44;break;case 20:break;case 21:this.popState();return 24;break;case 22:this.popState();return 18;break;case 23:n.yytext=s(1,2).replace(/\\"/g,'"');return 32;break;case 24:n.yytext=s(1,2).replace(/\\'/g,"'");return 32;break;case 25:return 42;break;case 26:return 34;break;case 27:return 34;break;case 28:return 33;break;case 29:return 40;break;case 30:n.yytext=s(1,2);return 40;break;case 31:return"INVALID";break;case 32:return 5;break}};e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};return e}();e.lexer=n;r.prototype=e;e.Parser=r;return new r}();e=t;return e}();var a=function(e,t){"use strict";function s(e){if(e.constructor===i.ProgramNode){return e}r.yy=i;return r.parse(e)}var n={};var r=e;var i=t;n.parser=r;n.parse=s;return n}(u,o);var f=function(e){"use strict";function r(){}function i(e,t,r){if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i=r.parse(e);var s=(new r.Compiler).compile(i,t);return(new r.JavaScriptCompiler).compile(s,t)}function s(e,t,r){function s(){var n=r.parse(e);var i=(new r.Compiler).compile(n,t);var s=(new r.JavaScriptCompiler).compile(i,t,undefined,true);return r.template(s)}if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i;return function(e,t){if(!i){i=s()}return i.call(this,e,t)}}var t={};var n=e;t.Compiler=r;r.prototype={compiler:r,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE"){n.push("DECLARE "+t.name+"="+t.value)}else{r=[];for(var u=0;u<t.args.length;u++){i=t.args[u];if(typeof i==="string"){i='"'+i.replace("\n","\\n")+'"'}r.push(i)}n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t){return false}for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||r.args.length!==i.args.length){return false}for(var s=0;s<r.args.length;s++){if(r.args[s]!==i.args[s]){return false}}}t=this.children.length;if(e.children.length!==t){return false}for(n=0;n<t;n++){if(!this.children[n].equals(e.children[n])){return false}}return true},guid:0,compile:function(e,t){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(n){for(var r in n){this.options.knownHelpers[r]=n[r]}}return this.accept(e)},accept:function(e){var t=e.strip||{},n;if(t.left){this.opcode("strip")}n=this[e.type](e);if(t.right){this.opcode("strip")}return n},program:function(e){var t=e.statements;for(var n=0,r=t.length;n<r;n++){this.accept(t[n])}this.isSimple=r===1;this.depths.list=this.depths.list.sort(function(e,t){return e-t});return this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options);var n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial;this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2){continue}else{this.addDepth(r-1)}}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;if(n){n=this.compileProgram(n)}if(r){r=this.compileProgram(r)}var i=t.sexpr;var s=this.classifySexpr(i);if(s==="helper"){this.helperSexpr(i,n,r)}else if(s==="simple"){this.simpleSexpr(i);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("blockValue")}else{this.ambiguousSexpr(i,n,r);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("pushHash");for(var i=0,s=t.length;i<s;i++){n=t[i];r=n[1];if(this.options.stringParams){if(r.depth){this.addDepth(r.depth)}this.opcode("getContext",r.depth||0);this.opcode("pushStringParam",r.stringModeValue,r.type);if(r.type==="sexpr"){this.sexpr(r)}}else{this.accept(r)}this.opcode("assignToHash",n[0])}this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=true;if(e.context){this.ID(e.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",t.name);this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr);if(e.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousSexpr:function(e,t,n){var r=e.id,i=r.parts[0],s=t!=null||n!=null;this.opcode("getContext",r.depth);this.opcode("pushProgram",t);this.opcode("pushProgram",n);this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.id;if(t.type==="DATA"){this.DATA(t)}else if(t.parts.length){this.ID(t)}else{this.addDepth(t.depth);this.opcode("getContext",t.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.id.parts[0];if(this.options.knownHelpers[s]){this.opcode("invokeKnownHelper",i.length,s)}else if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+s,e)}else{this.opcode("invokeHelper",i.length,s,e.isRoot)}},sexpr:function(e){var t=this.classifySexpr(e);if(t==="simple"){this.simpleSexpr(e)}else if(t==="helper"){this.helperSexpr(e)}else{this.ambiguousSexpr(e)}},ID:function(e){this.addDepth(e.depth);this.opcode("getContext",e.depth);var t=e.parts[0];if(!t){this.opcode("pushContext")}else{this.opcode("lookupOnContext",e.parts[0])}for(var n=1,r=e.parts.length;n<r;n++){this.opcode("lookup",e.parts[n])}},DATA:function(e){this.options.data=true;if(e.id.isScoped||e.id.depth){throw new n("Scoped data references are not supported: "+e.original,e)}this.opcode("lookupData");var t=e.id.parts;for(var r=0,i=t.length;r<i;r++){this.opcode("lookup",t[r])}},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0){return}if(!this.depths[e]){this.depths[e]=true;this.depths.list.push(e)}},classifySexpr:function(e){var t=e.isHelper;var n=e.eligibleHelper;var r=this.options;if(n&&!t){var i=e.id.parts[0];if(r.knownHelpers[i]){t=true}else if(r.knownHelpersOnly){n=false}}if(t){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function(e){var t=e.length,n;while(t--){n=e[t];if(this.options.stringParams){if(n.depth){this.addDepth(n.depth)}this.opcode("getContext",n.depth||0);this.opcode("pushStringParam",n.stringModeValue,n.type);if(n.type==="sexpr"){this.sexpr(n)}}else{this[n.type](n)}}},setupFullMustacheParams:function(e,t,n){var r=e.params;this.pushParams(r);this.opcode("pushProgram",t);this.opcode("pushProgram",n);if(e.hash){this.hash(e.hash)}else{this.opcode("emptyHash")}return r}};t.precompile=i;t.compile=s;return t}(n);var l=function(e,t){"use strict";function u(e){this.value=e}function a(){}var n;var r=e.COMPILER_REVISION;var i=e.REVISION_CHANGES;var s=e.log;var o=t;a.prototype={nameLookup:function(e,t){var n,r;if(e.indexOf("depth")===0){n=true}if(/^[0-9]+$/.test(t)){r=e+"["+t+"]"}else if(a.isValidJavaScriptVariableName(t)){r=e+"."+t}else{r=e+"['"+t+"']"}if(n){return"("+e+" && "+r+")"}else{return r}},compilerInfo:function(){var e=r,t=i[e];return"this.compilerInfo = ["+e+",'"+t+"'];\n"},appendToBuffer:function(e){if(this.environment.isSimple){return"return "+e+";"}else{return{appendToBuffer:true,content:e,toString:function(){return"buffer += "+e+";"}}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e;this.options=t||{};s("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!n;this.context=n||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(e,t);var i=e.opcodes,u;this.i=0;for(var a=i.length;this.i<a;this.i++){u=i[this.i];if(u.opcode==="DECLARE"){this[u.name]=u.value}else{this[u.opcode].apply(this,u.args)}if(u.opcode!==this.stripNext){this.stripNext=false}}this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new o("Compile completed with content left on stack")}return this.createFunctionContext(r)},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace;var n="helpers = this.merge(helpers, "+t+".helpers);";if(this.environment.usePartial){n=n+" partials = this.merge(partials, "+t+".partials);"}if(this.options.data){n=n+" data = data || {};"}e.push(n)}else{e.push("")}if(!this.environment.isSimple){e.push(", buffer = "+this.initializeBuffer())}else{e.push("")}this.lastContext=0;this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);if(t.length>0){this.source[1]=this.source[1]+", "+t.join(", ")}if(!this.isChild){for(var n in this.context.aliases){if(this.context.aliases.hasOwnProperty(n)){this.source[1]=this.source[1]+", "+n+"="+this.context.aliases[n]}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.pushSource("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var i=0,o=this.environment.depths.list.length;i<o;i++){r.push("depth"+this.environment.depths.list[i])}var u=this.mergeSource();if(!this.isChild){u=this.compilerInfo()+u}if(e){r.push(u);return Function.apply(this,r)}else{var a="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";s("debug",a+"\n\n");return a}},mergeSource:function(){var e="",t;for(var n=0,r=this.source.length;n<r;n++){var i=this.source[n];if(i.appendToBuffer){if(t){t=t+"\n    + "+i.content}else{t=i.content}}else{if(t){e+="buffer += "+t+";\n  ";t=undefined}e+=i+"\n  "}}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);this.replaceStack(function(t){e.splice(1,0,t);return"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t);this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){if(this.pendingContent){e=this.pendingContent+e}if(this.stripNext){e=e.replace(/^\s+/,"")}this.pendingContent=e},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")}this.stripNext="strip"},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }");if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){if(this.lastContext!==e){this.lastContext=e}},lookupOnContext:function(e){this.push(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(e,t){this.pushStackLiteral("depth"+this.lastContext);this.pushString(t);if(t!=="sexpr"){if(typeof e==="string"){this.pushString(e)}else{this.pushStackLiteral(e)}}},emptyHash:function(){this.pushStackLiteral("{}");if(this.options.stringParams){this.push("{}");this.push("{}")}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop();if(this.options.stringParams){this.push("{"+e.contexts.join(",")+"}");this.push("{"+e.types.join(",")+"}")}this.push("{\n    "+e.values.join(",\n    ")+"\n  }")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.inlineStack.push(e);return e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){if(e!=null){this.pushStackLiteral(this.programExpression(e))}else{this.pushStackLiteral(null)}},invokeHelper:function(e,t,n){this.context.aliases.helperMissing="helpers.helperMissing";this.useRegister("helper");var r=this.lastHelper=this.setupHelper(e,t,true);var i=this.nameLookup("depth"+this.lastContext,t,"context");var s="helper = "+r.name+" || "+i;if(r.paramsInit){s+=","+r.paramsInit}this.push("("+s+",helper "+"? helper.call("+r.callParams+") "+": helperMissing.call("+r.helperMissingParams+"))");if(!n){this.flushInline()}},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.context.aliases.functionType='"function"';this.useRegister("helper");this.emptyHash();var n=this.setupHelper(0,e,t);var r=this.lastHelper=this.nameLookup("helpers",e,"helper");var i=this.nameLookup("depth"+this.lastContext,e,"context");var s=this.nextStack();if(n.paramsInit){this.pushSource(n.paramsInit)}this.pushSource("if (helper = "+r+") { "+s+" = helper.call("+n.callParams+"); }");this.pushSource("else { helper = "+i+"; "+s+" = typeof helper === functionType ? helper.call("+n.callParams+") : helper; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];if(this.options.data){t.push("data")}this.context.aliases.self="this";this.push("self.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,r;if(this.options.stringParams){r=this.popStack();n=this.popStack()}var i=this.hash;if(n){i.contexts.push("'"+e+"': "+n)}if(r){i.types.push("'"+e+"': "+r)}i.values.push("'"+e+"': ("+t+")")},compiler:a,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s];i=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");u=this.context.programs.length;r.index=u;r.name="program"+u;this.context.programs[u]=i.compile(r,t,this.context);this.context.environments[u]=r}else{r.index=u;r.name="program"+u}}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e)){return t}}},programExpression:function(e){this.context.aliases.self="this";if(e==null){return"self.noop"}var t=this.environment.children[e],n=t.depths.list,r;var i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++){r=n[s];if(r===1){i.push("depth0")}else{i.push("depth"+(r-1))}}return(n.length===0?"self.program(":"self.programWithDepth(")+i.join(", ")+")"},register:function(e,t){this.useRegister(e);this.pushSource(e+" = "+t+";")},useRegister:function(e){if(!this.registers[e]){this.registers[e]=true;this.registers.list.push(e)}},pushStackLiteral:function(e){return this.push(new u(e))},pushSource:function(e){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));this.pendingContent=undefined}if(e){this.source.push(e)}},pushStack:function(e){this.flushInline();var t=this.incrStack();if(e){this.pushSource(t+" = "+e+";")}this.compileStack.push(t);return t},replaceStack:function(e){var t="",n=this.isInline(),r,i,s;if(n){var o=this.popStack(true);if(o instanceof u){r=o.value;s=true}else{i=!this.stackSlot;var a=!i?this.topStackName():this.incrStack();t="("+this.push(a)+" = "+o+"),";r=this.topStack()}}else{r=this.topStack()}var f=e.call(this,r);if(n){if(!s){this.popStack()}if(i){this.stackSlot--}this.push("("+t+f+")")}else{if(!/^stack/.test(r)){r=this.nextStack()}this.pushSource(r+" = ("+t+f+");")}return r},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof u){this.compileStack.push(r)}else{this.pushStack(r)}}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof u){return n.value}else{if(!t){if(!this.stackSlot){throw new o("Invalid stack pop")}this.stackSlot--}return n}},topStack:function(e){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];if(!e&&n instanceof u){return n.value}else{return n}},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(e,t,n){var r=[],i=this.setupParams(e,r,n);var s=this.nameLookup("helpers",t,"helper");return{params:r,paramsInit:i,name:s,callParams:["depth0"].concat(r).join(", "),helperMissingParams:n&&["depth0",this.quotedString(t)].concat(r).join(", ")}},setupOptions:function(e,t){var n=[],r=[],i=[],s,o,u;n.push("hash:"+this.popStack());if(this.options.stringParams){n.push("hashTypes:"+this.popStack());n.push("hashContexts:"+this.popStack())}o=this.popStack();u=this.popStack();if(u||o){if(!u){this.context.aliases.self="this";u="self.noop"}if(!o){this.context.aliases.self="this";o="self.noop"}n.push("inverse:"+o);n.push("fn:"+u)}for(var a=0;a<e;a++){s=this.popStack();t.push(s);if(this.options.stringParams){i.push(this.popStack());r.push(this.popStack())}}if(this.options.stringParams){n.push("contexts:["+r.join(",")+"]");n.push("types:["+i.join(",")+"]")}if(this.options.data){n.push("data:data")}return n},setupParams:function(e,t,n){var r="{"+this.setupOptions(e,t).join(",")+"}";if(n){this.useRegister("options");t.push("options");return"options="+r}else{t.push(r);return""}}};var f=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield").split(" ");var l=a.RESERVED_WORDS={};for(var c=0,h=f.length;c<h;c++){l[f[c]]=true}a.isValidJavaScriptVariableName=function(e){if(!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)){return true}return false};n=a;return n}(r,n);var c=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n.parser;var f=n.parse;var l=r.Compiler;var c=r.compile;var h=r.precompile;var p=i;var d=o.create;var v=function(){var e=d();e.compile=function(t,n){return c(t,n,e)};e.precompile=function(t,n){return h(t,n,e)};e.AST=u;e.Compiler=l;e.JavaScriptCompiler=p;e.Parser=a;e.parse=f;return e};o=v();o.create=v;s=o;return s}(s,o,a,f,l);return c}();

/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */


if(typeof Currency==="undefined"){var Currency={}}Currency.cookie={configuration:{expires:365,path:"/",domain:window.location.hostname},name:"currency",write:function(a){jQuery.cookie(this.name,a,this.configuration)},read:function(){return jQuery.cookie(this.name)},destroy:function(){jQuery.cookie(this.name,null,this.configuration)}};Currency.moneyFormats={USD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} USD"},EUR:{money_format:"&euro;{{amount}}",money_with_currency_format:"&euro;{{amount}} EUR"},GBP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} GBP"},CAD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} CAD"},ALL:{money_format:"Lek {{amount}}",money_with_currency_format:"Lek {{amount}} ALL"},DZD:{money_format:"DA {{amount}}",money_with_currency_format:"DA {{amount}} DZD"},AOA:{money_format:"Kz{{amount}}",money_with_currency_format:"Kz{{amount}} AOA"},ARS:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} ARS"},AMD:{money_format:"{{amount}} AMD",money_with_currency_format:"{{amount}} AMD"},AWG:{money_format:"Afl{{amount}}",money_with_currency_format:"Afl{{amount}} AWG"},AUD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} AUD"},BBD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} Bds"},AZN:{money_format:"m.{{amount}}",money_with_currency_format:"m.{{amount}} AZN"},BDT:{money_format:"Tk {{amount}}",money_with_currency_format:"Tk {{amount}} BDT"},BSD:{money_format:"BS${{amount}}",money_with_currency_format:"BS${{amount}} BSD"},BHD:{money_format:"{{amount}}0 BD",money_with_currency_format:"{{amount}}0 BHD"},BYR:{money_format:"Br {{amount}}",money_with_currency_format:"Br {{amount}} BYR"},BZD:{money_format:"BZ${{amount}}",money_with_currency_format:"BZ${{amount}} BZD"},BTN:{money_format:"Nu {{amount}}",money_with_currency_format:"Nu {{amount}} BTN"},BAM:{money_format:"KM {{amount_with_comma_separator}}",money_with_currency_format:"KM {{amount_with_comma_separator}} BAM"},BRL:{money_format:"R$ {{amount_with_comma_separator}}",money_with_currency_format:"R$ {{amount_with_comma_separator}} BRL"},BOB:{money_format:"Bs{{amount_with_comma_separator}}",money_with_currency_format:"Bs{{amount_with_comma_separator}} BOB"},BWP:{money_format:"P{{amount}}",money_with_currency_format:"P{{amount}} BWP"},BND:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} BND"},BGN:{money_format:"{{amount}} лв",money_with_currency_format:"{{amount}} лв BGN"},MMK:{money_format:"K{{amount}}",money_with_currency_format:"K{{amount}} MMK"},KHR:{money_format:"KHR{{amount}}",money_with_currency_format:"KHR{{amount}}"},KYD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} KYD"},XAF:{money_format:"FCFA{{amount}}",money_with_currency_format:"FCFA{{amount}} XAF"},CLP:{money_format:"${{amount_no_decimals}}",money_with_currency_format:"${{amount_no_decimals}} CLP"},CNY:{money_format:"&#165;{{amount}}",money_with_currency_format:"&#165;{{amount}} CNY"},COP:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} COP"},CRC:{money_format:"&#8353; {{amount_with_comma_separator}}",money_with_currency_format:"&#8353; {{amount_with_comma_separator}} CRC"},HRK:{money_format:"{{amount_with_comma_separator}} kn",money_with_currency_format:"{{amount_with_comma_separator}} kn HRK"},CZK:{money_format:"{{amount_with_comma_separator}} K&#269;",money_with_currency_format:"{{amount_with_comma_separator}} K&#269;"},DKK:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"kr.{{amount_with_comma_separator}}"},DOP:{money_format:"RD$ {{amount}}",money_with_currency_format:"RD$ {{amount}}"},XCD:{money_format:"${{amount}}",money_with_currency_format:"EC${{amount}}"},EGP:{money_format:"LE {{amount}}",money_with_currency_format:"LE {{amount}} EGP"},ETB:{money_format:"Br{{amount}}",money_with_currency_format:"Br{{amount}} ETB"},XPF:{money_format:"{{amount_no_decimals_with_comma_separator}} XPF",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} XPF"},FJD:{money_format:"${{amount}}",money_with_currency_format:"FJ${{amount}}"},GMD:{money_format:"D {{amount}}",money_with_currency_format:"D {{amount}} GMD"},GHS:{money_format:"GH&#8373;{{amount}}",money_with_currency_format:"GH&#8373;{{amount}}"},GTQ:{money_format:"Q{{amount}}",money_with_currency_format:"{{amount}} GTQ"},GYD:{money_format:"G${{amount}}",money_with_currency_format:"${{amount}} GYD"},GEL:{money_format:"{{amount}} GEL",money_with_currency_format:"{{amount}} GEL"},HNL:{money_format:"L {{amount}}",money_with_currency_format:"L {{amount}} HNL"},HKD:{money_format:"${{amount}}",money_with_currency_format:"HK${{amount}}"},HUF:{money_format:"{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} Ft"},ISK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr ISK"},INR:{money_format:"Rs. {{amount}}",money_with_currency_format:"Rs. {{amount}}"},IDR:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"Rp {{amount_with_comma_separator}}"},ILS:{money_format:"{{amount}} NIS",money_with_currency_format:"{{amount}} NIS"},JMD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} JMD"},JPY:{money_format:"&#165;{{amount_no_decimals}}",money_with_currency_format:"&#165;{{amount_no_decimals}} JPY"},JEP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} JEP"},JOD:{money_format:"{{amount}}0 JD",money_with_currency_format:"{{amount}}0 JOD"},KZT:{money_format:"{{amount}} KZT",money_with_currency_format:"{{amount}} KZT"},KES:{money_format:"KSh{{amount}}",money_with_currency_format:"KSh{{amount}}"},KWD:{money_format:"{{amount}}0 KD",money_with_currency_format:"{{amount}}0 KWD"},KGS:{money_format:"лв{{amount}}",money_with_currency_format:"лв{{amount}}"},LVL:{money_format:"Ls {{amount}}",money_with_currency_format:"Ls {{amount}} LVL"},LBP:{money_format:"L&pound;{{amount}}",money_with_currency_format:"L&pound;{{amount}} LBP"},LTL:{money_format:"{{amount}} Lt",money_with_currency_format:"{{amount}} Lt"},MGA:{money_format:"Ar {{amount}}",money_with_currency_format:"Ar {{amount}} MGA"},MKD:{money_format:"ден {{amount}}",money_with_currency_format:"ден {{amount}} MKD"},MOP:{money_format:"MOP${{amount}}",money_with_currency_format:"MOP${{amount}}"},MVR:{money_format:"Rf{{amount}}",money_with_currency_format:"Rf{{amount}} MRf"},MXN:{money_format:"$ {{amount}}",money_with_currency_format:"$ {{amount}} MXN"},MYR:{money_format:"RM{{amount}} MYR",money_with_currency_format:"RM{{amount}} MYR"},MUR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} MUR"},MDL:{money_format:"{{amount}} MDL",money_with_currency_format:"{{amount}} MDL"},MAD:{money_format:"{{amount}} dh",money_with_currency_format:"Dh {{amount}} MAD"},MNT:{money_format:"{{amount_no_decimals}} &#8366",money_with_currency_format:"{{amount_no_decimals}} MNT"},MZN:{money_format:"{{amount}} Mt",money_with_currency_format:"Mt {{amount}} MZN"},NAD:{money_format:"N${{amount}}",money_with_currency_format:"N${{amount}} NAD"},NPR:{money_format:"Rs{{amount}}",money_with_currency_format:"Rs{{amount}} NPR"},ANG:{money_format:"&fnof;{{amount}}",money_with_currency_format:"{{amount}} NA&fnof;"},NZD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} NZD"},NIO:{money_format:"C${{amount}}",money_with_currency_format:"C${{amount}} NIO"},NGN:{money_format:"&#8358;{{amount}}",money_with_currency_format:"&#8358;{{amount}} NGN"},NOK:{money_format:"kr {{amount_with_comma_separator}}",money_with_currency_format:"kr {{amount_with_comma_separator}} NOK"},OMR:{money_format:"{{amount_with_comma_separator}} OMR",money_with_currency_format:"{{amount_with_comma_separator}} OMR"},PKR:{money_format:"Rs.{{amount}}",money_with_currency_format:"Rs.{{amount}} PKR"},PGK:{money_format:"K {{amount}}",money_with_currency_format:"K {{amount}} PGK"},PYG:{money_format:"Gs. {{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"Gs. {{amount_no_decimals_with_comma_separator}} PYG"},PEN:{money_format:"S/. {{amount}}",money_with_currency_format:"S/. {{amount}} PEN"},PHP:{money_format:"&#8369;{{amount}}",money_with_currency_format:"&#8369;{{amount}} PHP"},PLN:{money_format:"{{amount_with_comma_separator}} zl",money_with_currency_format:"{{amount_with_comma_separator}} zl PLN"},QAR:{money_format:"QAR {{amount_with_comma_separator}}",money_with_currency_format:"QAR {{amount_with_comma_separator}}"},RON:{money_format:"{{amount_with_comma_separator}} lei",money_with_currency_format:"{{amount_with_comma_separator}} lei RON"},RUB:{money_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",money_with_currency_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"},RWF:{money_format:"{{amount_no_decimals}} RF",money_with_currency_format:"{{amount_no_decimals}} RWF"},WST:{money_format:"WS$ {{amount}}",money_with_currency_format:"WS$ {{amount}} WST"},SAR:{money_format:"{{amount}} SR",money_with_currency_format:"{{amount}} SAR"},STD:{money_format:"Db {{amount}}",money_with_currency_format:"Db {{amount}} STD"},RSD:{money_format:"{{amount}} RSD",money_with_currency_format:"{{amount}} RSD"},SCR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} SCR"},SGD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} SGD"},SYP:{money_format:"S&pound;{{amount}}",money_with_currency_format:"S&pound;{{amount}} SYP"},ZAR:{money_format:"R {{amount}}",money_with_currency_format:"R {{amount}} ZAR"},KRW:{money_format:"&#8361;{{amount_no_decimals}}",money_with_currency_format:"&#8361;{{amount_no_decimals}} KRW"},LKR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} LKR"},SEK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr SEK"},CHF:{money_format:"SFr. {{amount}}",money_with_currency_format:"SFr. {{amount}} CHF"},TWD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TWD"},THB:{money_format:"{{amount}} &#xe3f;",money_with_currency_format:"{{amount}} &#xe3f; THB"},TZS:{money_format:"{{amount}} TZS",money_with_currency_format:"{{amount}} TZS"},TTD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TTD"},TND:{money_format:"{{amount}}",money_with_currency_format:"{{amount}} DT"},TRY:{money_format:"{{amount}}TL",money_with_currency_format:"{{amount}}TL"},UGX:{money_format:"Ush {{amount_no_decimals}}",money_with_currency_format:"Ush {{amount_no_decimals}} UGX"},UAH:{money_format:"₴{{amount}}",money_with_currency_format:"₴{{amount}} UAH"},AED:{money_format:"Dhs. {{amount}}",money_with_currency_format:"Dhs. {{amount}} AED"},UYU:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} UYU"},VUV:{money_format:"${{amount}}",money_with_currency_format:"${{amount}}VT"},VEF:{money_format:"Bs. {{amount_with_comma_separator}}",money_with_currency_format:"Bs. {{amount_with_comma_separator}} VEF"},VND:{money_format:"{{amount_no_decimals_with_comma_separator}}&#8363;",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} VND"},XBT:{money_format:"{{amount_no_decimals}} BTC",money_with_currency_format:"{{amount_no_decimals}} BTC"},XOF:{money_format:"CFA{{amount}}",money_with_currency_format:"CFA{{amount}} XOF"},ZMW:{money_format:"K{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"ZMW{{amount_no_decimals_with_comma_separator}}"}};Currency.formatMoney=function(b,g){if(typeof Shopify.formatMoney==="function"){return Shopify.formatMoney(b,g)}if(typeof b=="string"){b=b.replace(".","")}var f="";var e=/\{\{\s*(\w+)\s*\}\}/;var a=g||"${{amount}}";function c(h,i){return(typeof h=="undefined"?i:h)}function d(m,k,l,j){k=c(k,2);l=c(l,",");j=c(j,".");if(isNaN(m)||m==null){return 0}m=(m/100).toFixed(k);var n=m.split("."),i=n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+l),h=n[1]?(j+n[1]):"";return i+h}switch(a.match(e)[1]){case"amount":f=d(b,2);break;case"amount_no_decimals":f=d(b,0);break;case"amount_with_comma_separator":f=d(b,2,".",",");break;case"amount_no_decimals_with_comma_separator":f=d(b,0,".",",");break}return a.replace(e,f)};Currency.currentCurrency="";Currency.format="money_with_currency_format";Currency.convertAll=function(c,b,a,d){jQuery(a||"span.money").each(function(){if(jQuery(this).attr("data-currency")===b){return}if(jQuery(this).attr("data-currency-"+b)){jQuery(this).html(jQuery(this).attr("data-currency-"+b))}else{var e=0;var f=Currency.moneyFormats[c][d||Currency.format]||"{{amount}}";var g=Currency.moneyFormats[b][d||Currency.format]||"{{amount}}";if(f.indexOf("amount_no_decimals")!==-1){e=Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10)*100,c,b)}else{if(c==="JOD"||c=="KWD"||c=="BHD"){e=Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10)/10,c,b)}else{e=Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g,""),10),c,b)}}var h=Currency.formatMoney(e,g);jQuery(this).html(h);jQuery(this).attr("data-currency-"+b,h)}jQuery(this).attr("data-currency",b)});this.currentCurrency=b;this.cookie.write(b)};


/*================ Slate ================*/
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element.first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element.first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on('click', function(evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.eventNamespace
      ? 'focusin.' + options.eventNamespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */

slate.cart = {

  /**
   * Browser cookies are required to use the cart. This function checks if
   * cookies are enabled in the browser.
   */
  cookiesEnabled: function() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled){
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
    }
    return cookieEnabled;
  }
};

/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

  /**
   * Return an object from an array of objects that matches the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  findInstance: function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

  /**
   * Remove an object from an array of objects by matching the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  removeInstance: function(array, key, value) {
    var i = array.length;
    while(i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },

  /**
   * _.compact from lodash
   * Remove empty/false items from array
   * Source: https://github.com/lodash/lodash/blob/master/compact.js
   *
   * @param {array} array
   */
  compact: function(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  },

  /**
   * _.defaultTo from lodash
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
   *
   * @param {*} value - Value to check
   * @param {*} defaultValue - Default value
   * @returns {*} - Returns the resolved value
   */
  defaultTo: function(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value
  }
};

/**
 * Rich Text Editor
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace rte
 */

slate.rte = {

  wrapTable: function() {
    $('.rte table').wrap('<div class="rte__table-wrapper"></div>');
  },

  iframeReset: function() {
    var $iframeVideo = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
    var $iframeReset = $iframeVideo.add('.rte iframe#admin_bar_iframe');

    $iframeVideo.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="rte__video-wrapper"></div>');
    });

    $iframeReset.each(function() {
      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:section:reorder', this._onReorder.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = $.extend(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.detail.sectionId);
  },

  _onSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },

  _onReorder: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

slate.Currency = (function() {
  var moneyFormat = '${{amount}}';

  /**
   * Format money values based on your shop currency settings
   * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
   * or 3.00 dollars
   * @param  {String} format - shop money_format setting
   * @return {String} value - formatted value
   */
  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

slate.Image = (function() {

  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }
 
 
  Variants.prototype = $.extend({}, Variants.prototype, {

    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = slate.utils.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = false;

      variants.forEach(function(variant) {
        var satisfied = true;

        selectedValues.forEach(function(option) {
          if (satisfied) {
            satisfied = (option.value === variant[option.index]);
          }
        });

        if (satisfied) {
          found = variant;
        }
      });

      return found || null;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {

      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });

  return Variants;
})();


/*================ Sections ================*/

/*================ Templates ================*/
/**
 * Customer Addresses Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Customer Addresses
 * template.
 *
 * @namespace customerAddresses
 */

theme.customerAddresses = (function() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

  // Initialize observers on address selectors, defined in shopify_common.js
  if (Shopify) {
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  }

  // Initialize each edit form's country/province selector
  $('.address-country-option').each(function() {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;

    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  });

  // Toggle new/edit address forms
  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
  });

  $('.address-delete').on('click', function() {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.data('confirm-message');
    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
    }
  });
})();

/**
 * Password Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Password template.
 *
 * @namespace password
 */

theme.customerLogin = (function() {
  var config = {
    recoverPasswordForm: '#RecoverPassword',
    hideRecoverPasswordLink: '#HideRecoverPasswordLink'
  };

  if (!$(config.recoverPasswordForm).length) {
    return;
  }

  checkUrlHash();
  resetPasswordSuccess();

  $(config.recoverPasswordForm).on('click', onShowHidePasswordForm);
  $(config.hideRecoverPasswordLink).on('click', onShowHidePasswordForm);

  function onShowHidePasswordForm(evt) {
    evt.preventDefault();
    toggleRecoverPasswordForm();
  }

  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }
  }

  /**
   *  Show/Hide recover password form
   */
  function toggleRecoverPasswordForm() {
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }

  /**
   *  Show reset password success message
   */
  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }

    // show success message
    $('#ResetSuccess').removeClass('hide');
  }
})();


$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Wrap videos in div to force responsive layout.
  slate.rte.wrapTable();
  slate.rte.iframeReset();

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});



function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};

$( document ).ready(function() {
  if(getUrlParameter('variant')==false){
   //$('.rdio01').click();
 // $('[data="frst"]').click();
   $('.swatch.o-f-hid').find('label').click();
 
  }
  
 });

 $(window).load(function() {
   setTimeout(() => {
    // console.log("line 2141", $("input[name^=selling_plan]").closest('.rc-option--active'), $("input[name^=selling_plan]").closest('.rc-option--active').find('input[type="radio"]'))
    var ele = $("input[name^=selling_plan]").closest('.rc-radio')
    ele.click(function() {
      // console.log($(this))
      if($(this).hasClass("rc-option--active")) {
        var inner_ele = $(this).find('input[type="radio"]')
        // console.log(inner_ele, inner_ele.val())
        // if(inner_ele.val() == "subsave") {
          var subprice = inner_ele.next().find('span:last-child').text()
          // console.log(inner_ele.next().find('span:last-child').text().split("$")[1], subprice)
          $('span.original_price').text(subprice)
        // }
      }
    })
    var widget_ele = $(".rc-container-wrapper")
    widget_ele.insertAfter(".product--price-block")
    $(".rc_popup").hide()
   }, 2000);
 })
