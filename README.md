# chat-space DB設計
## usersテーブル
| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| email    | string | null: false |
| password | string | null: false |
| nickname | string | null: false |
### Association
- has_many :posts
- has_many :groups, through:  :users_groups

## groupsテーブル
| Column  | Type    | Options                        |
| ------- | ------- | ------------------------------ |
| name    | string  | null: false                    |
| user_id | integer | null: false, foreign_key: true |
### Association
- has_many :posts
- has_many :users, through:  :users_groups


## users_groupsテーブル
| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |
### Association
- belongs_to :user
- belongs_to :group

## postsテーブル
| Column   | Type   | Options                        |
| -------- | ------ | ------------------------------ |
| image    | text   |                                |
| text     | text   |                                |
| user_id  | string | null: false, foreign_key: true |
| group_id | string | null: false, foreign_key: true |
### Association
- belongs_to :user
- belongs_to :group