export const RenderContent = ({ content }: { content: any[] }) => {
  return content?.map((node, index) => {
    switch (node?.nodeType) {
      case "heading-1":
        return (
          <h1 className='text-4xl font-bold' key={index}>
            {node?.content?.[0]?.value}
          </h1>
        );
      case "heading-2":
        return (
          <h2 className='text-3xl font-bold' key={index}>
            {node?.content?.[0]?.value}
          </h2>
        );
      case "heading-3":
        return (
          <h3 className='text-2xl font-bold' key={index}>
            {node?.content?.[0]?.value}
          </h3>
        );
      case "heading-4":
        return (
          <h4 className='text-xl font-bold' key={index}>
            {node?.content?.[0]?.value}
          </h4>
        );
      case "heading-5":
        return (
          <h5 className='text-lg font-bold' key={index}>
            {node?.content?.[0]?.value}
          </h5>
        );
      case "heading-6":
        return (
          <h6 className='text-base font-bold' key={index}>
            {node?.content?.[0]?.value}
          </h6>
        );
      case "paragraph":
        return (
          <p key={index}>
            {node?.content?.map((item: any, itemIndex: number) => {
              if (item.nodeType === "hyperlink") {
                return (
                  <a
                    href={item?.data?.uri}
                    key={itemIndex}
                    className='text-blue-500 underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {item?.content?.[0]?.value}
                  </a>
                );
              }
              if (item.marks?.[0]?.type === "bold") {
                return (
                  <span key={itemIndex} className='font-bold'>
                    {item?.value}
                  </span>
                );
              }
              return <span key={itemIndex}>{item?.value}</span>;
            })}
          </p>
        );
      case "ordered-list":
        return (
          <ol
            key={index}
            className='max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400'
          >
            {node.content.map((item: any, itemIndex: number) => (
              <li key={itemIndex}>{item?.content?.[0]?.content?.[0]?.value}</li>
            ))}
          </ol>
        );
      case "unordered-list":
        return (
          <ul
            className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'
            key={index}
          >
            {node.content.map((item: any, itemIndex: number) => (
              <li key={itemIndex}>{item?.content?.[0]?.content?.[0]?.value}</li>
            ))}
          </ul>
        );
      case "blockquote":
        return (
          <blockquote
            key={index}
            className='p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'
          >
            <p className='text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white'>
              {node?.content?.[0]?.content?.[0]?.value}
            </p>
          </blockquote>
        );
      case "table":
        return (
          <table
            key={index}
            className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'
          >
            <tbody>
              {node.content.map((row: any, rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  {row.content.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex} className='px-6 py-4'>
                      {cell?.content?.[0].content?.[0]?.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "hr":
        return (
          <hr
            key={index}
            className='w-100 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'
          />
        );
      // Add more cases for other node types as needed
      default:
        return null;
    }
  });
};

export const RenderParagraph = ({ content }: { content: any[] }) => {
  return content?.map(
    (node, index) =>
      index <= 1 &&
      node?.nodeType === "paragraph" && (
        <span key={index}>
          {node?.content?.map((item: any, itemIndex: number) => {
            if (item.marks?.[0]?.type === "bold") {
              return (
                <span key={itemIndex} className='font-bold'>
                  {item?.value}
                </span>
              );
            }
            return <span key={itemIndex}>{item?.value}</span>;
          })}
        </span>
      )
  );
};
