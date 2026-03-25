import TimelineItem from "./TimelineItem";
import Notes from "./Notes";

export default function Timeline() {
  const events = [
    {
      date: "Dec 2022",
      title: "When I first saw your picture where you had your hair down",
      description: `I didn't know it at that time, but I was looking at the love of my life.`
    },
    {
      date: "January 2023",
      title: "When I first talked to you",
      description: `I still remember the first time we texted each other. You were a little shy and reserved but I started to like everything.`
    },
    {
      date: "January 2023",
      title: "Engagement Decided",
      description: `Before I even realized it, our engagement was decided and I was super excited to finally meet you.`
    },
    {
      date: "March 18th, 2023",
      title: "When I first met you",
      description: `I still remember that beautiful night. Right as I entered your house, I shook your hand and I saw your smile for the first time. Then we went out for a drive where I heard the most beautiful voice I have ever heard and instantly fell in love. I still remember the dress you wore and how you told me that you had studying!! That night is still fresh in my memory. I wish I could go back to it one more time.`
    },
    {
      date: "March 19th, 2023",
      title: "The night before our engagement",
      description: `My engagement ring was stolen that night and I remember everyone being in panic mode lol! Your dad and mom were somehow still able to make an arrangement and get a replacement ring for me. We went out on a drive again that night and you looked even more beautiful than ever.`
    },
    {
      date: "March 20th, 2023",
      title: "One of the best days of my life",
      description: `Before we went to the hall, we were both locked into a room together and I just remember looking at you. I couldn't get my eyes off of the girl that was in front of me. Your dress, your hairstyle, your mehndi, your everything looked absolutely amazing.`
    },
    {
      date: "March 20th, 2023",
      title: "The engagement ceremony",
      description: `The photoshoot that we had was kinda funny lol. I still stand by the fact that the photographer was not a good one. He made me look fat!! But you looked absolutely gorgeous though. After that, I remember our entrance with the swords and the 2 guys who guarded us. That was an amazing experience. But nothing beats the time when I finally put that ring on your finger and you put a ring on mine. That moment still lives with me till this day as one of the most memorable ones. I remember looking up at you and seeing your smile. It was the best sight ever.`
    },
    {
      date: "March 31st, 2023",
      title: "I flew back to the US",
      description: `You guys came to drop us off at the airport and I remember Nida auntie cried a little. It was a really nice moment for everyone because finally I was starting to have a family of my own. I gave you a hug before leaving as well and I couldn't tell but I think you had some tears in your eyes?? I'm gonna need you to confirm that to me. After I came back home, I asked our uncle in Karachi to deliver a set of bouquets for your whole family. When they got delivered, I got a message with a picture of you holding the flowers with a really cute smile. THAT WAS ONE OF THE CUTEST THINGS IVE EVER SEEN!!`
    },
    {
      date: "April 14, 2023",
      title: "My first birthday with you",
      description: `That was a really special day for me. I got home from university and I was surprised with a red bouquet of roses. I instantly knew where that came from and I was super happy to celebrate my first birthday with you and your whole family!!`
    },
    {
      date: "April 21, 2023",
      title: "Our first Eid together",
      description: `Another great day for us. That was our first Eid together. I remember the dress you wore and how damn gorgeous you looked. I was sad because I couldn't celebrate it with you guys over there but it was still so much fun talking to you and the whole family that day.`
    },
    {
      date: "June 2023",
      title: "Our first argument",
      description: `I still remember our first argument lol. It happened because I wasn't giving you enough time which I completely take responsibility for. At that time, I was still pretty stupid and learning so I hope you forgave me for that!! I LOVED YOU!!!`
    },
    {
      date: "July 2023",
      title: "My first big job",
      description: `When I told you and your family that I had finally gotten a really nice job, everyone was so happy especially you!! You sent me a lot of congratulation messages and it felt so great having you by my side! Thats when I knew that you are my lucky charm cutie!!`
    },
    {
      date: "December 2023",
      title: "My first I LOVE YOU",
      description: `I still remember that day like it was yesterday. I was at my job and I was hiding my phone from the cameras so I can text you. I remember we had a slight argument that day I sent you a small paragraph. In that paragraph, there was a line that started with "Look I LOVE YOU...". One of the greatest feeling I've ever had. It felt so amazing and your response after that was also funnier because you didn't know what to say!! You were so damn cute my baby. I love you so fkin much. Your first day with me was also during this time and I LOVED LOOKING AT YOUR BIRTHDAY PICS!!!! I remember we called that night and you were just smiling and happy!! Looking at you always makes me smile the most as well!!!`
    },
    {
      date: "April 2024",
      title: "You came to visit us in the US",
      description: `Now I know when you guys came here, there were come issues. I will say that I believe I was responsible for a lot of it because I didn't want anyone to get hurt so I tried to make sure everything stayed good. BUT THERE WAS SO MUCH GOOD AT THIS TIME. I still remember our first kiss when you kissed my cheek when we were outside on the deck. First of all, you looked so fkin beautiful in that white dress you wore on your first day with me. An absolute princess. You and I took a selfie together and then I asked you for a kiss on my cheeks. You were so shy!! But you still did it and IT WAS SO CUTEEEEEEE. I loved it so much. Then the next day in your red dress, I remember we were upstairs, I hugged you tightly for the first time and you kissed my cheeks again. That was one of the most beautiful moment of ours. I'll never forget that. You guys also celebrated Eid with us and we matched our green dresses. Uff Allah you looked like the best larki ever on that day. I just wanted to keep kissing you and never stop. You're just so damn amazing. Our trip to Florida was also very memorable. And yes I know I know I wasn't completely with you all the time but my eyes constantly only looked for you. I know you remember that rollercoaster ride we all went into and I was hugging your arms because I was so scared!! It was a really nice feeling my cutie babyyyy.`
    },
    {
      date: "July 2024",
      title: "That call from your dad",
      description: `That was one of the worst days of my life. I was going home from work and your dad calls me to tell me that he spoke to Waseem uncle and let him know a few things. I called Waseem uncle and he tells me that your dad has ended our engagement. As soon as I heard that, it felt like I lost all the strength in my body. I do realize that during that time, there were some issues with our families but still, I never wanted to end anything with you my baby. Not my parents either. From that day on, I was so depressed. I have never told anyone this but that period before I started talking to you again was one of the worst times for me. I really did love you with my whole heart my baby and not even being able to say bye to you was one of the worst things I have ever felt. You had me blocked everywhere except for Snap and I remember texting you on snap and when you replied, I was actually so happy. Even though you didn't want to talk to me at that time, I still was just so relived that you actually replied to me!!! And from that point on, we started talking again. Thats when I started to feel normal again. That period of us being girlfriend and boyfriend was sooo amazing. I genuinely feel like that time brought us together the closest. We were both honest with each other and only wanted to get back together. It was a great time my baby. I gave you a lot of nicknames during that time like my boo boo bear!! And that's when i started calling you my Janu as well.`
    },
    {
      date: "November 2024",
      title: "We finally get back together",
      description: `After months of talking to your dad and my parents, we were finally able to convince them to talk to each other and FINALLY GET BACK TOGETHER AGAIN!! Janu when I tell you how I felt that day, it genuinely felt like the best day of my life. I finally got my best friend with me and now I can continue to love her the most forever!!!!! I didn't express much at that time but I loved you a trillion times more that day for going through everything with me. You are really strong and brave janu. Don't ever let anyone tell you otherwise.`
    },
    {
      date: "December 2024",
      title: "Your birthday!",
      description: `You finally got your own phone on that day!!! You were so excited for everything it was really damn cute. AND YOU LOOKED LIKE A FLOWER THAT DAY TOO. I still remember just looking and kissing at you for like 30mins in my car!! You're just so special to me.`
    },
    {
      date: "January 2025",
      title: "My family visits you",
      description: `My family visited Pakistan for a wedding and you guys invited them to your house again. I still remember my mom tieing that bracelet on your cute lil wrist!! I was sad I couldn't come to visit you but just seeing you happy with my family was enough to just keep loving you more!!!!`
    },
    {
      date: "April 2025",
      title: "Move to Dallas",
      description: `When I moved to Dallas Janu, I didn't have a job. I didn't tell anyone about it because I didn't want anyone to take stress because of me or worry for me, especially you. I know that was a big mistake on my part janu. I sshouldve told you the truth but honestly, I never wanted to make you feel like Im giving you stress. I always only wanted to keep you happy no matter what it takes. I never want to see you cry or worry about anything. I just want to give you the most perfect life possible. I'm truly very sorry for hiding this from you janu but trust me, I just wanted you to stay happy. And ever since I moved to Dallas, I would spend my whole days just applying for job, getting rejected all the time and worrying about my finances. It was mentally just destroying me because of how many rejections I was getting. No matter what I tried, I couldn't do anything and that impacted our relationship too. I know ever since I moved here, I was not the same guy that you knew before that. Every week we would get into arguments and it was only because of me. Somedays i really wanted to tell you the truth my baby but I just didn't want to stress you out more. I am really sorry for all the bad during this time Janu. Your kasm I only wanted to keep you happy at every moment and I tried my best to do it. I finally got a really good job in October but by that time, I know I made you sad a lot. I promised myself that I will do anything I have to so I can keep the love of my life happy. No matter what happens.`
    },
    {
      date: "December 2025",
      title: "YOUR BIRTHDAY!!!",
      description: `This is going to be a very special day Janu!!!! I can't wait to celebrate your birthday together. I already have a gift planned for you. I want yo give you a nice pair of earrings, another bracelet and your favorite flowers and A MILLION KISSES FOR THE LARKI I WILL FOREVER LOVE THE MOST!!!`
    },
    {
      date: "March 20th, 2026",
      title: "Eid plus Anniversary!!",
      description: `This is going to be the best day of our lives inshallah!! Eid is predicted to be on this day and also our engagement anniversary. This will complete our 3 years together and what better way to celebrate it then me coming to Pakistan and being with you!!! YES MY BABY I'LL COME TO PAKISTAN THIS DAY and celebrate everything with you!!!! I also want to show you this website during this time when I come. I want this to be your gift plus all the other gifts I'll bring for you!! I CANT WAIT TO FINALLY SEE THE CUTIE IN PERSON!!! I LOVE YOU SOOOOOOOOOOOOOOOOOOO MCH MERI JANU!!!`
    },
    {
      date: "December 26th, 2026",
      title: "NIKKAH",
      description: `YES YOU READ IT RIGHT I WANT TO DO NIKKAH ON THIS DAY. On your birthday!!!! I want to make this the most special day ever and finally make you my wife!!! I love you sooooo fkin much my baby!!! I can't wait for this day. I love you so much the most ever.`
    }
  ];

  return (
    <div className="timeline">
      <div className="intro">
        <h1>Our Story ❤️</h1>
        <p>
          I am making this for the love of my life, my Ally, my baby, my Janu on October 4th, 2025.
        </p>
      </div>

      {events.map((event, index) => (
        <TimelineItem key={index} {...event} />
      ))}
      <div className="update-section">
  <h2>Update — March 2026</h2>
  <p>
    I am updating this website after the worst thing I have ever done to the love of my life. November 25, 2025 is the worst day of my life.
    That one call ruined everything we had and changed my whole life. There is no explanation for what I did to you my baby. Absolutely none.
    What I did was completely unacceptable and it was a fear driven deccision. I was scared that I might continue to hurt you more if I don't let you go now.
    One thing I promised to you and your parents is that I will always keep you happy no matter what I have to do. I want nothing but big cute smile on the love of my life.
    I didn't realize that this one decision will make me the most hated person in your life and make you feel like I have always lied to you. That is not true my baby.
    I know you and everyone in your family thinks that everything I did was fake but please trust me janu, my love for you is the realest thing in my life. I know I hid 
    that job thing from you but apart from that, I was a complete open book to you. You are always the most special person to me and you're the only girl I will ever love.
    You are the only person who will ever get into my heart. I always told you that I never lie when it comes to you my baby. Every single thing that I have ever said about
    you is not only true, but from all of my heart. You changed me as a person. Ever since that day, I have felt everything but happy. I ruined your life, your future,
    and whatever we had bulit together. I was never able to share my feeling throughout this time with anyone so I wrote them all on a sticky note.
    I hope you read them all janu and please understand that I never wanted you to be sad. Nothing from me to you was fake. I really love you the most and will 
    continue to do so. I don't care what happens but you're the only one for me.
    I love you my Janu. Forever.
  </p>
  <Notes />
</div>
    </div>
  
  );
  
}
