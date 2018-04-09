const camelCase = require('camelcase');

module.exports = {
  toProlog: (json) => {
    const predicates = Object.keys(json);
    if (predicates.length === 0) return '';
    let prolog = '';
    predicates.forEach((predicate) => {
      const facts = json[predicate];
      if (!(facts.length === 0)) {
        // print comment with predicate documentation
        const args = Object.keys(facts[0]).map((a) => {
          return camelCase(a, { pascalCase: true });
        }).join(',');
        prolog += `% ${camelCase(predicate)}(${args}).\n`;
        // print the facts
        facts.forEach((fact) => {
          const values = Object.values(fact).join(',');
          prolog += `${camelCase(predicate)}(${values}).\n`;
        });
      }
    });
    return prolog;
  }
};
