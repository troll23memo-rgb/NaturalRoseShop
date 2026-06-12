# simple callback: directly update commit/committer if matching old identity
if commit.author_name == b"Natural Rose Bot" or commit.author_email == b"noreply@naturalroseshop.local":
    commit.author_name = b"troll23memo-rgb"
    commit.author_email = b"troll23memo@gmail.com"

if commit.committer_name == b"Natural Rose Bot" or commit.committer_email == b"noreply@naturalroseshop.local":
    commit.committer_name = b"troll23memo-rgb"
    commit.committer_email = b"troll23memo@gmail.com"
