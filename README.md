# PX Values Gen

This repository includes some values that are needed to create PerimeterX Cookies. It also includes encoding of payloads and the creation of needed PC Value.
This however is a subject to change as PX is doing updates every now and then.
PX Values are also a subject to change.

## Create PC Value

```javascript
   // To create the PC Value you can do the following:
   // Payload parsed as string.
   var pc = genPC2(genPC1(N(D(uuid, payload))))
```

## Encode First Payload

```javascript
   // To create the encoded payload you can do the following:
   // payload parsed as string, "" is empty sts as its returned after first post request
   var firstPayloadEncoded = obfuscatePayload(payload, uuid, "")
```

## Encode Second Payload

```javascript
   // To create the encoded second payload you can do the following:
   // payload parsed as string, "" is empty sts as its returned after first post request
   // sts can be found in response json from first post request
   var secondpayloadEncoded = obfuscatePayload(secondPayload, uuid, sts)
```

## Create dynamic Values

```javascript
   // All information regarding dynamic Values can be found in pxvalues.js
```

## Information

This was my first time looking into an Anti Bot and JavaScript.


## License

[MIT](https://choosealicense.com/licenses/mit/)
