import Vue from 'vue'


const requireComponent = require.context('./', false, /([A-Z][a-z]+)*[A-Z][a-z]\w+\.(vue)$/);

// PascalCase itteration
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  var componentName = fileName;
  var componentName = componentName.split('./');
  componentName = componentName[1].split('.vue');
  componentName = componentName.join("");

  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig);
});