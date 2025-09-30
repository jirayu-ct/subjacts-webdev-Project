<script setup lang="ts">
interface BlogPost {
  title: string
  description: string
  date: string
  tags: string[]
  link: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'วางโครงสร้าง Retrieval-Augmented Generation ให้ตอบไวและแม่นยำ',
    description: 'แชร์ประสบการณ์ปรับปรุง RAG pipeline ตั้งแต่การเลือกเวกเตอร์สโตร์ การจัดการ context ไปจนถึงการประเมินผลตอบกลับต่อรอบ.',
    date: '16 กันยายน 2568',
    tags: ['AI', 'RAG', 'Vector DB'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'NUXT 3 Production Checklist สำหรับทีมเล็ก',
    description: 'สรุปเช็กลิสต์ที่ใช้จริงในการพา Nuxt 3 ขึ้นโปรดักชัน ครอบคลุมการตั้งค่า Nitro, caching, CI/CD และการเฝ้าระวังปัญหา.',
    date: '28 สิงหาคม 2568',
    tags: ['Nuxt', 'SSR', 'DevOps'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'เปรียบเทียบ Next.js App Router กับ Pages Router หลังใช้งานจริง',
    description: 'ถอดบทเรียนจากการย้ายระบบเดิมไป App Router: การจัดการข้อมูล, การกำหนด layout ระดับ nested, และผลกระทบต่อ DX.',
    date: '12 สิงหาคม 2568',
    tags: ['Next.js', 'React', 'Architecture'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Observability สำหรับแอปสาย Dev ด้วย OpenTelemetry',
    description: 'ตัวอย่างการดักจับ trace จาก Nuxt + Node บน Kubernetes พร้อมการวิเคราะห์ log และ metric เพื่อไล่ปัญหาเร็วขึ้น.',
    date: '30 กรกฎาคม 2568',
    tags: ['OpenTelemetry', 'Monitoring', 'SRE'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <div class="mt-40">
    <h2 class="text-4xl font-semibold text-gray-900 dark:text-white">บทความ</h2>
    <p class="text-gray-600 dark:text-gray-300/80">รวมเรื่องราว เทคนิค และบทเรียนที่ได้จากการพัฒนาเว็บทั้งฝั่ง Frontend และ Backend เพื่อให้คุณนำไปต่อยอดในงานของตัวเองได้รวดเร็วขึ้น</p>
    <div class="mt-12 space-y-10">
      <div class="space-y-6">
        <UCard
          v-for="post in blogPosts"
          :key="post.title"
          class="overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-700/40"
          :ui="{
            body: 'p-0',
            header: 'hidden',
            footer: 'hidden'
          }"
        >
          <template #default>
            <article class="flex flex-col md:flex-row">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-48 w-full object-cover md:h-auto md:w-64"
                loading="lazy"
              />
              <div class="flex flex-1 flex-col gap-3 p-6">
                <p class="text-sm font-medium uppercase tracking-wide text-primary/80 dark:text-primary">
                  {{ post.date }}
                </p>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {{ post.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300/80">
                  {{ post.description }}
                </p>
                <div class="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                  <div class="flex flex-wrap gap-2">
                    <UBadge
                      v-for="tag in post.tags"
                      :key="tag"
                      color="neutral"
                      variant="soft"
                    >
                      #{{ tag }}
                    </UBadge>
                  </div>
                  <UButton
                    :to="post.link"
                    color="neutral"
                    variant="ghost"
                    trailing-icon="i-heroicons-arrow-right-20-solid"
                  >
                    อ่านต่อ
                  </UButton>
                </div>
              </div>
            </article>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
