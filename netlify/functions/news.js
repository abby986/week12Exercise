exports.handler = async function () {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'NEWS_API_KEY environment variable not set' }),
    };
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=art+design&language=en&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`
    );
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch news' }),
    };
  }
};
