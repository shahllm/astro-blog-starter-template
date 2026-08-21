export const prerender = false;

export async function GET({ request }) 
{
  let output = '';
  for (const [key, value] of request.headers.entries()) {
    output += `${key}: ${value}\n`;
  }
  return new Response(output, {
    headers: { 'content-type': 'text/plain' },
  });
}
