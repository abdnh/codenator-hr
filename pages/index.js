import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";


import { SITE_NAME, MOTTO } from "../lib/common";

export default function Home() {
  const title = `${SITE_NAME} HR - ${MOTTO}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>

        <CTASection />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis at erat. Sodales ut etiam sit amet nisl. Vitae justo eget magna fermentum iaculis eu. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Cras semper auctor neque vitae tempus quam pellentesque nec. Aliquet risus feugiat in ante metus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Dignissim diam quis enim lobortis scelerisque fermentum. Nunc pulvinar sapien et ligula ullamcorper. Quis viverra nibh cras pulvinar. Orci phasellus egestas tellus rutrum.

          Consectetur adipiscing elit ut aliquam purus sit amet luctus. Pharetra vel turpis nunc eget lorem dolor. Interdum velit euismod in pellentesque. Turpis massa sed elementum tempus egestas sed. Ultrices eros in cursus turpis massa. In nibh mauris cursus mattis molestie a iaculis. Nunc sed id semper risus in hendrerit gravida rutrum. Egestas quis ipsum suspendisse ultrices gravida dictum. Arcu non odio euismod lacinia at quis risus sed vulputate. Porttitor lacus luctus accumsan tortor posuere. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Viverra vitae congue eu consequat ac. Eget gravida cum sociis natoque penatibus et magnis dis. Nunc sed blandit libero volutpat sed cras ornare arcu dui. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Eu volutpat odio facilisis mauris sit. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget.

          Accumsan sit amet nulla facilisi morbi tempus iaculis. Congue eu consequat ac felis donec et. Elementum nibh tellus molestie nunc non. Lorem mollis aliquam ut porttitor leo a. Sed arcu non odio euismod lacinia at quis. Sed viverra tellus in hac. Mauris sit amet massa vitae tortor condimentum lacinia quis. Penatibus et magnis dis parturient montes. Amet nisl purus in mollis. Arcu felis bibendum ut tristique et egestas quis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Non blandit massa enim nec. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Etiam tempor orci eu lobortis elementum nibh. Mi proin sed libero enim sed. Justo laoreet sit amet cursus sit amet dictum sit amet. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Ullamcorper a lacus vestibulum sed arcu. Aliquet eget sit amet tellus cras adipiscing enim.

          Nisl suscipit adipiscing bibendum est ultricies integer. At consectetur lorem donec massa sapien. Sit amet luctus venenatis lectus. Posuere ac ut consequat semper viverra. At auctor urna nunc id cursus. Ut morbi tincidunt augue interdum. In massa tempor nec feugiat nisl. Pulvinar pellentesque habitant morbi tristique. Sed nisi lacus sed viverra tellus in. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.

          Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Enim tortor at auctor urna. Feugiat pretium nibh ipsum consequat nisl vel pretium. Viverra tellus in hac habitasse platea. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Arcu vitae elementum curabitur vitae nunc sed. A pellentesque sit amet porttitor eget dolor. At in tellus integer feugiat scelerisque varius morbi enim nunc. Morbi leo urna molestie at elementum eu. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Nibh sit amet commodo nulla facilisi. Ipsum dolor sit amet consectetur adipiscing elit. Viverra orci sagittis eu volutpat.

          Nulla facilisi nullam vehicula ipsum a. Lectus mauris ultrices eros in. Tortor at risus viverra adipiscing at. Nascetur ridiculus mus mauris vitae ultricies leo. Nisi porta lorem mollis aliquam ut porttitor leo a. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet luctus venenatis lectus magna fringilla urna. Suspendisse potenti nullam ac tortor vitae purus faucibus. Ut morbi tincidunt augue interdum velit euismod in. Euismod elementum nisi quis eleifend quam adipiscing vitae. Faucibus turpis in eu mi bibendum neque egestas. Purus semper eget duis at tellus at urna condimentum mattis. Dolor sed viverra ipsum nunc. Volutpat ac tincidunt vitae semper. Ultricies mi quis hendrerit dolor. Lacus sed turpis tincidunt id. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Pretium fusce id velit ut tortor pretium viverra suspendisse.

          Facilisis sed odio morbi quis commodo odio. Donec enim diam vulputate ut pharetra. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Purus semper eget duis at. A cras semper auctor neque vitae. Orci a scelerisque purus semper eget. Vitae et leo duis ut diam. Sed turpis tincidunt id aliquet risus. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Blandit libero volutpat sed cras ornare arcu dui. Rhoncus est pellentesque elit ullamcorper dignissim. Viverra orci sagittis eu volutpat. Nam aliquam sem et tortor consequat id porta.

          Semper auctor neque vitae tempus quam pellentesque. Semper auctor neque vitae tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet consectetur. Vel facilisis volutpat est velit egestas dui id ornare. Praesent elementum facilisis leo vel fringilla. Natoque penatibus et magnis dis parturient montes. At volutpat diam ut venenatis tellus in metus. Nunc sed id semper risus in hendrerit gravida rutrum. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Fermentum dui faucibus in ornare quam viverra. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.

          Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Facilisis leo vel fringilla est ullamcorper. At lectus urna duis convallis convallis. Ut diam quam nulla porttitor. Etiam non quam lacus suspendisse. Etiam sit amet nisl purus in mollis nunc sed. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Elit scelerisque mauris pellentesque pulvinar pellentesque. Laoreet suspendisse interdum consectetur libero.

          Lorem donec massa sapien faucibus et molestie. Nunc mi ipsum faucibus vitae aliquet nec. Bibendum at varius vel pharetra vel. Ante in nibh mauris cursus mattis molestie a iaculis at. A lacus vestibulum sed arcu. Nec ultrices dui sapien eget mi proin sed libero enim. Facilisis gravida neque convallis a cras semper auctor. Senectus et netus et malesuada fames ac turpis egestas sed. Malesuada pellentesque elit eget gravida cum sociis natoque. Pretium quam vulputate dignissim suspendisse in est ante in. Morbi quis commodo odio aenean sed adipiscing diam donec. Diam phasellus vestibulum lorem sed risus ultricies tristique. Adipiscing bibendum est ultricies integer quis auctor elit sed. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Eu feugiat pretium nibh ipsum consequat nisl.        </p>
      </main>
    </div>
  )
}
