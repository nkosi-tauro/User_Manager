/**
 * Automatically imports all the modules and exports as a single module object
 */
 const requireModule = require.context('.', false, /\.store\.ts$/)
 const modules: { [key: string]: any[] } = {}
 
 requireModule.keys().forEach((filename) => {
   // create the module name from fileName
   // remove the store.js extension and capitalize
   const moduleName: string = filename
     .replace(/(\.\/|\.store\.ts)/g, '')
     .replace(/^\w/, (c) => c.toLowerCase())
 
   modules[moduleName] =
     requireModule(filename).default || requireModule(filename)
 })
 
 console.log(modules)
 
 export default modules
 