<div>
  <img src="https://github.com/xkrishguptaa.png" height="100px" width="100px" />
  <br />
  <h1>Learning</h1>
  <p>Records of me learning by doing ✨</p>
</div>

## 💻 Projects

{{#each projects.groups.three}}

<table>
  <thead>
  {{#each this}}
    <th>
      <a href="{{repository.url}}">
        <img src="{{logo}}" height="48px" width="48px" alt="{{name}}'s logo" />
        <br />
        <b>{{name}}</b>
      </a>
    </th>
  {{/each}}
  </thead>
  <tbody>
    <tr>
    {{#each this}}
      <td>
        {{description}}
      </td>
    {{/each}}
    </tr>
    <tr>
    {{#each this}}
      <td>
        {{#each links}}
          <a href="{{link}}" title="{{text}} {{../name}}">
          {{#if primary}}
            <img src="https://img.shields.io/badge/{{urlify text}}-2965F1?style=for-the-badge&labelColor=2965F1&logoColor=ffffff&logo={{button.icon}}" />
          {{else}}
            <img src="https://img.shields.io/badge/{{urlify text}}-eeeeee?style=for-the-badge&labelColor=eeeeee&logo={{button.icon}}" />
          {{/if}}
          </a>
          {{#unless @last}}
            <br />
          {{/unless}}
        {{/each}}
      </td>
    {{/each}}
    </tr>
    <tr>
    {{#each this}}
      <td>
        {{#each technologies}}
          <kbd>{{this}}</kbd>{{#unless @last}}, {{/unless}}
        {{/each}}
      </td>
    {{/each}}
    </tr>
  </tbody>
</table>

{{/each}}

## 🔖 Assignments

{{#each assignments.groups.three}}

<table>
  <thead>
  {{#each this}}
    <th>
      <a href="{{repository.url}}">
        <img src="{{logo}}" height="48px" width="48px" alt="{{name}}'s logo" />
        <br />
        <b>{{name}}</b>
      </a>
    </th>
  {{/each}}
  </thead>
  <tbody>
    <tr>
    {{#each this}}
      <td>
        {{description}}
      </td>
    {{/each}}
    </tr>
    <tr>
    {{#each this}}
      <td>
        {{#each links}}
          <a href="{{link}}" title="{{text}} {{../name}}">
          {{#if primary}}
            <img src="https://img.shields.io/badge/{{urlify text}}-2965F1?style=for-the-badge&labelColor=2965F1&logoColor=ffffff&logo={{button.icon}}" />
          {{else}}
            <img src="https://img.shields.io/badge/{{urlify text}}-eeeeee?style=for-the-badge&labelColor=eeeeee&logo={{button.icon}}" />
          {{/if}}
          </a>
          {{#unless @last}}
            <br />
          {{/unless}}
        {{/each}}
      </td>
    {{/each}}
    </tr>
    <tr>
    {{#each this}}
      <td>
        {{#each technologies}}
          <kbd>{{this}}</kbd>{{#unless @last}}, {{/unless}}
        {{/each}}
      </td>
    {{/each}}
    </tr>
  </tbody>
</table>

{{/each}}
