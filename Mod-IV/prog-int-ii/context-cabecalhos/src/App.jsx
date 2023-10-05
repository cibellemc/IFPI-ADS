import Heading from './Heading.jsx';
import Section from './Section.jsx';

/*export default function Page() {
  return (
    <Section>
      <Heading>Section Pai</Heading>

      <Section>
        <Heading>Section Filha 1</Heading>

        <Section>
          <Heading>Section Filha 2</Heading>
          <Heading>Section Filha 2</Heading>
          
          <Section>
            <Heading>Section Filha 3</Heading>
            <Heading>Section Filha 3</Heading>
            <Heading>Section Filha 3</Heading>

          </Section>
        </Section>
      </Section>
    </Section>
  );
}*/

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}
