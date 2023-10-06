import { OutputBlockData } from "@editorjs/editorjs";

export const convertEditorDataToHTML = (blocks: OutputBlockData[]) => {
  let html = "";

  blocks.map(({ type, data }) => {
    switch (type) {
      case "header":
        html += `<h${data.level}>${data.text}</h${data.level}>`;
        break;
      case "paragraph":
        html += `<p>${data.text}</p>`;
        break;
      case "delimiter":
        html += "<hr />";
        break;
      case "list":
        html += "<ul>";
        data.items.forEach((li: string) => {
          html += `<li>${li}</li>`;
        });
        html += "</ul>";
        break;
      case "link":
        html += `<a href="${data.link}">${data.text}<a/>`;
        break;
      case "image":
        html += `<img class="img-fluid" src="${data.url}" title="${data.caption}" />`;
        break;
      default:
        console.log("Unknown block type", type);
        break;
    }
  });

  console.debug(html)
  return html;
}