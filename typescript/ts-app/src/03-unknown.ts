let anyVar: any;
anyVar = 1;
anyVar = '1';
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = null;
anyVar = undefined;

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

let unknownVar: unknown;
unknownVar = 1;
unknownVar = '1';
unknownVar = true;
unknownVar = {};
unknownVar = [];
unknownVar = null;
unknownVar = undefined;

// unknownVar.doSomething();
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}