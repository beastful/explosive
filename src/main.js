import './style.css'
import MultiMediator from  '@voxelful/multimediator'

export class Explosive {
  constructor() {
    this.mediator = new MultiMediator('__explosive__')
    this.functions = {};
    this.store = {};
    this.mediator.on('registerNativeFunction', this.registerNativeFunction.bind(this))
  }
  registerNativeFunction(name, fun) {
    this.functions[name] = fun;
  }
  process(pair) {
    if (typeof pair !== "object") return pair;
    return this.functions[pair[0]](
      pair[1],
      (e) => {
        return this.process(e);
      },
      this.store
    );
  }
}

class MathPack {
  constructor() {
    this.explosive = new MultiMediator('__explosive__')
    this.explosive.emit('registerNativeFunction', 'sum', (args, res) => {
      return res(args[0]) + res(args[1])
    })
  }
}

new MathPack()
const exp = new Explosive()

console.log(exp.process(['sum', [
  ['sum', [3, 4]]
  , 2]]))



