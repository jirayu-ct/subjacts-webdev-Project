<template>
  <section class="mx-auto max-w-5xl px-6 py-16 text-white">
    <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div class="space-y-4">
        <h1 class="text-4xl font-semibold">About Me</h1>
        <p class="max-w-2xl text-white/70">
          Learn more about my path from Buriram Rajabhat University to becoming a hands-on Full-Stack Developer who loves crafting reliable, meaningful web experiences.
        </p>
      </div>
      <img
        src="https://scontent.fnak2-1.fna.fbcdn.net/v/t39.30808-6/472851689_1559686738029329_7162501891964347993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WO-cXL1HosEQ7kNvwGneoo-&_nc_oc=AdmYtzBzCIuF_YAg3BiAF_B-6vI-LQPcG1mBoeO8xJv-E8hwQCJgUUt23KD2QylUn9A&_nc_zt=23&_nc_ht=scontent.fnak2-1.fna&_nc_gid=3gejmTDqujkGfyzlcPIong&oh=00_AfbYemoAMdlou4Q-MKeSMQJxy3UCzBd7Al2t5eqEdHDTZg&oe=68DF5D37"
        alt="Portrait"
        class="h-32 w-32 rounded-2xl object-cover shadow-xl"
        loading="lazy"
      />
    </div>

    <article class="mt-12 space-y-6 text-white/80">
      <p>
        สวัสดีครับ ผม <span class="font-semibold text-white">จิรายุ ชมทอง</span> ปัจจุบันเป็นนักศึกษาปีที่ 3 คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ ที่มหาวิทยาลัยราชภัฏบุรีรัมย์ ผมหลงใหลในงานพัฒนาเว็บแบบ Full-Stack และตั้งใจสร้างโซลูชันดิจิทัลที่ทั้งสวยงามและใช้งานได้จริง
      </p>
      <p>
        เส้นทางของผมเริ่มจากความชอบในการออกแบบและความอยากรู้อยากเห็นเรื่องระบบหลังบ้าน ตั้งแต่ปีแรกผมจึงลงมือทำโปรเจกต์จริง ทั้งระบบข้อมูลสำหรับหน่วยงานท้องถิ่น ระบบตอบคำถามอัตโนมัติด้วย AI และเว็บที่ช่วยสนับสนุนงานในชุมชน ทุกโปรเจกต์ทำให้ผมเข้าใจว่าความรู้ทางเทคนิคต้องเดินคู่กับการเข้าใจผู้ใช้เสมอ
      </p>
    </article>

    <section class="mt-14 grid gap-10 md:grid-cols-2">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">สิ่งที่ผมเชื่อ</h2>
        <p class="text-white/70">
          ผมเชื่อว่าซอฟต์แวร์ที่ดีเกิดจากการเข้าใจปัญหารอบด้าน การผสมผสานระหว่าง UX ที่ตั้งใจออกแบบกับโค้ดที่ดูแลง่ายทำให้ระบบเติบโตได้จริง ผมชอบกระบวนการ iterative ชัดเจน ตั้งแต่การออกแบบ prototype, การสร้าง API, ไปจนถึงการปรับปรุง performance หลังขึ้นใช้งาน
        </p>
        <p class="text-white/70">
          เทคโนโลยีที่ผมสนใจเป็นพิเศษช่วงนี้คือ Nuxt, Next.js, และแนวทาง Retrieval-Augmented Generation ที่ช่วยยกระดับการให้ข้อมูลจาก AI ให้ตอบโจทย์ธุรกิจมากขึ้น
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">เป้าหมายของผม</h2>
        <p class="text-white/70">
          ผมอยากเป็นนักพัฒนาที่ช่วยทีมและองค์กรเปลี่ยนไอเดียให้เป็นผลิตภัณฑ์ที่ใช้งานได้จริง มีแผนเรียนรู้ด้านระบบคลาวด์และ DevOps ให้มากขึ้น เพื่อเชื่อมการพัฒนากับการ deploy ในระดับ production ได้อย่างราบรื่น
        </p>
        <p class="text-white/70">
          นอกเวลาเรียน ผมมักทดลองโปรเจกต์ใหม่ ๆ เขียนโน้ตสั้น ๆ ลงบล็อก และทบทวนโค้ดเก่าเพื่อหาวิธีปรับปรุงให้ง่ายขึ้น ถ้ามีโอกาสร่วมงานหรือคุยแลกเปลี่ยนประสบการณ์ ผมยินดีเสมอ
        </p>
      </div>
    </section>

    <section class="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <h2 class="text-2xl font-semibold text-white">ติดต่อผม</h2>
      <p class="mt-3 text-white/70">
        สนใจร่วมโปรเจกต์หรืออยากพูดคุยเกี่ยวกับเทคโนโลยี ติดต่อผมได้ที่อีเมล <NuxtLink to="mailto:jirayu.ct.dev@gmail.com" class="text-primary-300 hover:underline">jirayu.ct.dev@gmail.com</NuxtLink> หรือทักมาบนโซเชียลที่สะดวกครับ
      </p>
    </section>
  </section>
</template>
