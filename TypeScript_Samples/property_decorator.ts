function logProperty(target, key) {
  let _val = this[key];
  const getter = () => {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  }

  const setter = (newValue) => {
    console.log(`Set: ${key} => ${newValue}`);
    _val = newValue;
  }

  const objectProperty = {
    get: getter,
    set : setter
  }

  Object.defineProperty(target, key, objectProperty);
}

class Persona {
  @logProperty
  private name: String;

  constructor(name: string) {
    this.name = name;
  }
}

const p: Persona = new Persona('Antonio');
p.name = 'Platzi'; // Set: name => 'Platzi'
const nameFromClass = p.name; // Get: name => 'Platzi'