<div align="center">
  <img src="https://github.com/xkrishguptaa.png" height="100px" width="100px" />
  <br />
  <h1>Learning</h1>
  <p>Records of me learning by doing ✨</p>
</div>

> This file is meant to provide a filterable list of my projects. You can use the table of content to navigate to a specific technology. Projects are repeated if they use multiple technologies.

## 🖥️ Technologies

{{#each technologies}}
- [{{this.name}}](#{{urlify this.name}})
{{/each}}

{{#each technologies}}
### {{this.name}}

| Name | Description | Links | Technologies |
| ---- | ----------- | ----- | ------------ |
{{#each this.projects}}
| [{{name}}](https://{{repository.host}}.com/{{repository.username}}/{{repository.project}}) | {{description}} | {{#each links}} {{#if primary}} [![{{text}}](https://img.shields.io/badge/{{urlify text}}-2965F1?style=for-the-badge&logoColor=fff&labelColor=2965F1)]({{link}}) {{else}} [![{{text}}](https://img.shields.io/badge/{{urlify text}}-eee?style=for-the-badge)]({{link}}) {{/if}} {{/each}} | {{#each technologies}}`{{this}}`{{#unless @last}}, {{/unless}}{{/each}} |
{{/each}}

Go back to [top](#%EF%B8%8F-technologies)

{{/each}}

