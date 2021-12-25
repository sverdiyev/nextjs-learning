import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/router';
import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

const Dummy_Meetups = [
  {
    id: 'm1',
    title: 'first meetup',
    image:
      'https://images.unsplash.com/photo-1640210178824-d029d3cfd676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    address: 'lviv',
    description: 'describe me ',
  },
  {
    id: 'm2',
    title: 'first meetup',
    image:
      'https://images.unsplash.com/photo-1640210178824-d029d3cfd676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    address: 'lviv',
    description: 'describe me ',
  },
];

function MeetupDetails(props) {
  const { meetup } = props;

  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{meetup.title} </title>

        <meta name='description' content='browse these meetups pls' />
      </Head>
      <MeetupDetail
        image={meetup.image}
        description={meetup.description}
        address={meetup.address}
        title={meetup.title}
      />
    </>
  );
}

export async function getStaticPaths() {
  const password = 'aUSjJhO7eUkOOC1t';
  const username = 'learningnext';
  const database = 'nextJsDB';

  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;

  const client = new MongoClient(url);
  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const loadedMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  let meetupsId = loadedMeetups.map((meetup) => {
    const meetupId = meetup._id.toString();
    return { params: { meetupId } };
  });

  return { fallback: true, paths: meetupsId };
}

// export async function getStaticProps({ params: {slug} }) {

export async function getStaticProps(context) {
  const password = 'aUSjJhO7eUkOOC1t';
  const username = 'learningnext';
  const database = 'nextJsDB';

  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;

  const client = new MongoClient(url);
  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const { meetupId } = context.params;
  const loadedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log('🚀 ~ getStaticProps ~ loadedMeetup', loadedMeetup);

  client.close();

  const meetup = {
    title: loadedMeetup.title,
    address: loadedMeetup.address,
    image: loadedMeetup.image,
    description: loadedMeetup.description,
    id: loadedMeetup._id.toString(),
  };

  return {
    props: { meetup: meetup },
  };
}

export default MeetupDetails;
