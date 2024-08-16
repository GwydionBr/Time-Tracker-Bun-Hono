import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const infoSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3).max(100),
  age: z.number().int().positive()
})

const createTestPostSchema = infoSchema.omit({id: true})

export type Info = z.infer<typeof infoSchema>

const fakeInfo: Info[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 25
  },
  {
    id: 2,
    name: 'Michael Smith',
    age: 30
  },
  {
    id: 3,
    name: 'Margot Diff',
    age: 22
  },
  {
    id: 4,
    name: 'Heidi Doe',
    age: 27
  }
]

export const testRoute = new Hono()
  .get('/', async (c) => {
    return c.json({ 'info': fakeInfo });
  })
  .post('/', zValidator("json", createTestPostSchema), async (c) => {
    const testPost = await c.req.valid("json");
    fakeInfo.push({...testPost, id: fakeInfo.length + 1});
    c.status(201);
    return c.json(testPost);
  })
  .get('/:id{[0-9]+}', async (c) => {
    const id  = Number.parseInt(c.req.param('id'));
    const info = fakeInfo.find(info => info.id === id);
    if (!fakeInfo) {
      return c.notFound();
    }
    return c.json(info);
  })
  .delete('/:id{[0-9]+}', async (c) => {
    const id  = Number.parseInt(c.req.param('id'));
    const index = fakeInfo.findIndex(info => info.id === id);
    if (!fakeInfo) {
      return c.notFound();
    }
    const deletedInfo = fakeInfo.splice(index, 1);
    return c.json(deletedInfo);
  })
