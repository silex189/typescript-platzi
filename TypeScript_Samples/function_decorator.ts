function log(target, key) {
  console.log(key + 'se ha llamado');
}

class Persona {
  private name: String;
  
  constructor(name: String) {
    this.name = name;
  }

  @log
  sayMyName(name: String) :String {
    console.log(this.name);
  }
}

const persona: Persona = new Persona('Antonio');

persona.sayMyName(); // nombre // se ha llamado