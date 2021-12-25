import { MongoClient } from 'mongodb';
import MeetUpList from '../components/meetups/MeetupList';
import Head from 'next/head';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Nextjs Meetups </title>

        <meta name='description' content='browse these meetups pls' />
      </Head>
      <MeetUpList meetups={props.meetups}></MeetUpList>
    </>
  );
}

export async function getStaticProps() {
  const password = 'aUSjJhO7eUkOOC1t';
  const username = 'learningnext';
  const database = 'nextJsDB';

  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;

  const client = new MongoClient(url);
  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const loadedMeetups = await meetupsCollection.find({}).toArray();

  client.close();

  let meetups = [];
  for (const meetup of loadedMeetups) {
    meetups.push({
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
      id: meetup._id.toString(),
    });
  }

  return {
    props: { meetups: meetups },
    // props: { meetups: loadedMeetups },
    // revalidate: 20,
  };
}

export default HomePage;
