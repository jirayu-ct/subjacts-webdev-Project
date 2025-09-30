<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <div>
    <UPageHero>
      <template #title>
        <div class="flex flex-col items-center text-center">
          <UAvatar
            src="https://scontent.fnak2-1.fna.fbcdn.net/v/t39.30808-6/472851689_1559686738029329_7162501891964347993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WO-cXL1HosEQ7kNvwGneoo-&_nc_oc=AdmYtzBzCIuF_YAg3BiAF_B-6vI-LQPcG1mBoeO8xJv-E8hwQCJgUUt23KD2QylUn9A&_nc_zt=23&_nc_ht=scontent.fnak2-1.fna&_nc_gid=3gejmTDqujkGfyzlcPIong&oh=00_AfbYemoAMdlou4Q-MKeSMQJxy3UCzBd7Al2t5eqEdHDTZg&oe=68DF5D37"
            alt="Jirayu Chomthong"
            class="h-20 w-20 mb-2 p-1 border-1 border-gray-100 dark:border-gray-700 rounded-full"
          />
          <span>สวัสดีครับ ผมจิรายุ ชมทอง<br>Full-Stack Developer</span>
        </div>
      </template>

      <template #description>
        นักพัฒนา Full-Stack ที่เปลี่ยนไอเดียให้เป็นเว็บแอปพลิเคชันที่ใช้งานได้จริง ตั้งแต่การออกแบบส่วนติดต่อผู้ใช้ (UI)
        ที่สวยงาม ไปจนถึงการสร้างระบบหลังบ้าน (Back-end) ที่มีประสิทธิภาพและปลอดภัย
      </template>

      <template #footer>
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'lg', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </UPageHero>


    <div class="mt-12 flex justify-center gap-6 overflow-x-auto px-6 py-4 sm:px-0">
      <div class="relative h-90 w-60 flex-shrink-0 overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
        <img
          src="https://img5.pic.in.th/file/secure-sv1/BRUAI.jpg"
          alt="Leaf close-up"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="relative h-90 w-60 flex-shrink-0 overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
        <img
          src="https://img2.pic.in.th/pic/nongchisi.jpg"
          alt="Corridor architecture"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="relative h-90 w-60 flex-shrink-0 overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105">
        <img
          src="https://img2.pic.in.th/pic/shool.jpg"
          alt="Classic house facade"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
    <div class="grid gap-8 lg:grid-cols-2 mt-12 px-6 sm:px-0">
      <div class="space-y-4 lg:col-span-1">
        <h2 class="text-2xl text-black dark:text-white">
          เกี่ยวกับผม
        </h2>
        <p class="text-sm text-gray-500 dark:text-gray-300/70">
          ปัจจุบันผมเป็นนักศึกษาปีที่ 3 คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ ที่มหาวิทยาลัยราชภัฏบุรีรัมย์
          ผมมีความหลงใหลในการพัฒนาเว็บแบบ Full-Stack
          และมีความมุ่งมั่นที่จะเป็นนักพัฒนาเว็บที่สามารถสร้างสรรค์ผลิตภัณฑ์ดิจิทัลที่สมบูรณ์แบบได้
        </p>
      </div>
      <div class="space-y-3 lg:col-span-1">
        <h2 class="text-2xl text-black dark:text-white">
          ประสบการณ์และโปรเจกต์
        </h2>
        <p class="text-sm text-gray-500 dark:text-gray-300/70">
          ปัจจุบัน - นักพัฒนาเว็บแบบ Full-Stack
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-300/70">
          2025 - AI Chatbot Developer งานกิจการนักเรียน โรงเรียนภัทรบพิตร
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-300/70">
          2025 - AI Chatbot Developer อบต.สระแก้ว
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-300/70">
          2025 - AI Chatbot Developer อบต.หนองชัยศรี
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-300/70">
          2025 - AI Chatbot Developer BRU เพื่อการเกษตร
        </p>
      </div>
    </div>
  </div>
</template>
